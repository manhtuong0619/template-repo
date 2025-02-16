import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { useContainer } from 'class-validator';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { GLOBAL_ROOT_PREFIX } from './shared/constants/http-request';
import { manufactureValidationException } from './shared/exceptions/factories/validation-exception.factory';
import { AllExceptionsFilter } from './shared/exceptions/filters/all-exceptions.filter';
import { AppModule } from './app.module';
import { setUpSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const configService = app.get(ConfigService);
  const swaggerEnabled = configService.get('swaggerEnabled');

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix(GLOBAL_ROOT_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
      validationError: {
        target: true,
        value: true,
      },
      exceptionFactory: manufactureValidationException,
    })
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.enableShutdownHooks();

  if (swaggerEnabled) {
    setUpSwagger(app);
  }

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors({ allowedHeaders: '*', origin: '*', credentials: true });

  await app.listen(configService.getOrThrow('port'), () => {
    console.log(`\n🚀 App running on http://localhost:${configService.get('port')}`);
    if (swaggerEnabled) {
      console.log(`\n🚀 Swagger running on http://localhost:${configService.get('port')}/api-docs\n`);
    }
  });
}
bootstrap().catch((e) => console.log(`\n🚀 Failed to start Application due to ->>\n${e}`));
