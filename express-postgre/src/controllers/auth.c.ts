import AppDataSource from 'src/database/data-source';
import User from 'src/database/entities/user.entity';
import { BadRequestException } from 'src/shared/exceptions';
import { compareHash } from 'src/utils/bcrypt';
import { signToken } from 'src/utils/jwt';
import { NextFunction, Request, Response } from 'express';

import logger from '../utils/logger';

class AuthController {
  static readonly userRepository = AppDataSource.getRepository(User);

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        throw new BadRequestException({
          details: [{ issue: 'Body must contain {email, password}' }],
        });

      const user = await AuthController.userRepository.findOne({
        where: {
          email,
        },
      });

      if (!user)
        throw new BadRequestException({
          details: [{ issue: "Email doesn't exist" }],
        });

      const isCorrectPassword = compareHash(password, user.password);
      if (!isCorrectPassword)
        throw new BadRequestException({
          details: [{ issue: 'Invalid password' }],
        });

      const accessToken = signToken({ userId: user.id });
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { password: pw, ...returnUser } = user;
      return res.status(200).json({ ...returnUser, accessToken });
    } catch (error: any) {
      logger.error(error.message);
      next(error);
    }
  }
}

export default new AuthController();
