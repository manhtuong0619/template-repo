import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

const databaseModuleParams: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    uri: configService.get<string>('database.uri'),
    dbName: configService.get<string>('database.name'),
    autoCreate: configService.get<string>('nodeEnv') !== 'production',
    autoIndex: configService.get<string>('nodeEnv') !== 'production',
    ...configService.get('database.options'),
  }),
};

export default databaseModuleParams;
