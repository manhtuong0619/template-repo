import User from 'src/database/entities/user.entity';
import { Auth } from 'src/shared/decorators/auth.decorator';
import { NotFoundException } from 'src/shared/exceptions';
import { HttpStatus } from 'src/shared/exceptions/enums/http-status.enum';
import { CustomUserRequest } from 'src/shared/interfaces/request.interface';
import logger from 'src/utils/logger';
import { NextFunction, Response } from 'express';

class UsersController {
  @Auth()
  async findMe(req: CustomUserRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;

      // const cacheKey = `userId:${userId}`;
      // const cachedUser = await redisClient.get(cacheKey);

      // if (cachedUser) {
      //   return res.status(HttpStatus.OK).json(JSON.parse(cachedUser));
      // }

      // if (!userId) {
      //   throw new NotFoundException({ details: [{ issue: 'User not found' }] });
      // }

      const user = await User.findOne({
        _id: userId,
      });

      if (!user) {
        throw new NotFoundException({ details: [{ issue: 'User not found' }] });
      }

      // await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 3600);
      return res.status(HttpStatus.OK).json(user);
    } catch (error: any) {
      logger.error('Error in findMe:', error.message);
      next(error);
    }
  }
}

export default new UsersController();
