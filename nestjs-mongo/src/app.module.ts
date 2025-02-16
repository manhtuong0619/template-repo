import * as dotenv from 'dotenv';
dotenv.config();

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';

import { configuration } from './config/configuration';
import databaseModuleParams from './lib/database/database-module-params';
import loggerModuleParams from './lib/logger/logger-module-params';
import { ExampleModule } from './modules/example/example.module';
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

    MongooseModule.forRootAsync(databaseModuleParams),

    LoggerModule.forRootAsync(loggerModuleParams),
    // Global modules
    HttpRequestContextModule,

    // Shared modules

    // Modules
    ExampleModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdHeaderMiddleware, HttpRequestContextMiddleware).forRoutes('*');
  }
}
