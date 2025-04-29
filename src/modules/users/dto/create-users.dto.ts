/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@ValidatorConstraint({ name: 'noSqlInjection', async: false })
export class NoSqlInjectionConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    if (!value) return true;

    const sqlKeywords = [
      'select',
      'insert',
      'update',
      'delete',
      'drop',
      'truncate',
      'create',
      'alter',
      'exec',
      'xp_',
      ' or ',
      '--',
      ';',
      "'",
      '"',
      '=',
    ];

    const lowerValue = value.toLowerCase();
    return !sqlKeywords.some((keyword) => lowerValue.includes(keyword));
  }

  defaultMessage(args: ValidationArguments) {
    return 'Input contains potential SQL injection keywords';
  }
}

export class CreateUserDto {
  @ApiProperty({ example: 'johndoe', description: 'User name' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be blank' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  @Matches(/^[a-zA-ZÀ-ỹ\s0-9]+$/, {
    message: 'Name cannot contain special characters',
  })
  @Validate(NoSqlInjectionConstraint, {
    message: 'The name cannot contain SQL keywords.',
  })
  username: string;

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'User email address',
  })
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email cannot be blank' })
  @Validate(NoSqlInjectionConstraint, {
    message: 'Emails cannot contain SQL keywords',
  })
  email: string;

  @ApiProperty({ example: '123456Ts', description: 'Password' })
  @IsDefined({ message: 'Password must not be missing' })
  @IsNotEmpty({ message: 'Password cannot be blank' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number',
  })
  @Validate(NoSqlInjectionConstraint, {
    message: 'Password cannot contain SQL keywords',
  })
  password: string;
}
