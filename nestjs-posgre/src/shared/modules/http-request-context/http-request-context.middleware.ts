import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

import { HttpRequestContextService } from './http-request-context.service';

@Injectable()
export class HttpRequestContextMiddleware implements NestMiddleware {
  private readonly logger = new Logger(HttpRequestContextMiddleware.name);

  constructor(private readonly service: HttpRequestContextService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.service.runWithContext(req, res, next);
  }
}
