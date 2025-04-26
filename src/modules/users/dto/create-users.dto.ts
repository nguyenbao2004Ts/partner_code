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
  @IsString({ message: 'Tên phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @MinLength(3, { message: 'Tên phải có ít nhất 3 ký tự' })
  @Matches(/^[a-zA-ZÀ-ỹ\s0-9]+$/, {
    message: 'Tên không được chứa ký tự đặc biệt',
  })
  @Validate(NoSqlInjectionConstraint, {
    message: 'Tên không được chứa từ khoá SQL',
  })
  username: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  @Validate(NoSqlInjectionConstraint, {
    message: 'Email không được chứa từ khoá SQL',
  })
  email: string;

  @IsDefined({ message: 'Mật khẩu không được thiếu' })
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số',
  })
  @Validate(NoSqlInjectionConstraint, {
    message: 'Mật khẩu không được chứa từ khoá SQL',
  })
  password: string;
}
