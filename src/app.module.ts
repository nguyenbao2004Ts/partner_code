import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { DatabaseModule } from './database/database.module';
import { PartnerModule } from './modules/partner/partner.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppConfigModule } from './modules/app-config/app-config.module';
import { AppUserModule } from './modules/app-user/app-user.module';
import { LeadspropertyModule } from './modules/leadsproperty/leadsproperty.module';
import User from './modules/users/entity/User';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User],
        synchronize: false,
      }),
    }),
    DatabaseModule,
    PartnerModule,
    UsersModule,
    AuthModule,
    AppConfigModule,
    AppUserModule,
    LeadspropertyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
