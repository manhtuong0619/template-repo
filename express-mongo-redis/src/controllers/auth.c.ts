import { Validation } from 'src/shared/decorators/validation-pipe.decorator';
import { CreateCredentialsDto } from 'src/shared/dtos/auth/create-credentials.dto';
import { NextFunction, Request, Response } from 'express';

import logger from '../utils/logger';

class AuthController {
  @Validation(CreateCredentialsDto)
  login(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as CreateCredentialsDto;

      return dto;
    } catch (error: any) {
      logger.error(error.message);
      next(error);
    }
  }
}

export default new AuthController();
