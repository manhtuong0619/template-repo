import * as dotenv from 'dotenv';
dotenv.config();

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { DataSource } from 'typeorm';

import { configuration } from './config/configuration';
import { TypeOrmConfig } from './database/typeorm.config';
import loggerModuleParams from './lib/logger/logger-module-params';
import { AuthModule } from './modules/auth/auth.module';
import { ExampleModule } from './modules/example/example.module';
import { UserModule } from './modules/user/user.module';
import { RequestIdHeaderMiddleware } from './shared/middlewares/request-id-header.middleware';
import { HttpRequestContextMiddleware } from './shared/modules/http-request-context/http-request-context.middleware';
import { HttpRequestContextModule } from './shared/modules/http-request-context/http-request-context.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env'],
    }),

    LoggerModule.forRootAsync(loggerModuleParams),

    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
      dataSourceFactory: async (options) => {
        return await new DataSource(options!).initialize();
      },
    }),
    // Global modules
    HttpRequestContextModule,

    // Shared modules

    // Modules
    ExampleModule,

    AuthModule,

    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdHeaderMiddleware, HttpRequestContextMiddleware).forRoutes('*');
  }
}
