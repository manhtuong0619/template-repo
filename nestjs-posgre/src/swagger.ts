import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

import { HeaderKey } from './shared/constants/http-request';

export const setUpSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Chat Application API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .addApiKey({ type: 'apiKey', name: 'public-key', in: 'header' }, 'public-key')
    .addGlobalParameters({
      in: 'header',
      required: false,
      name: HeaderKey.GUID,
      schema: {
        example: uuidv4(),
      },
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
};
