import { Injectable, Logger } from '@nestjs/common';

import { CreateExampleRequestDto } from './dtos/create-example-request.dto';
import { FormDataUploadDto } from './dtos/formdata-upload-request.dto';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);

  constructor() {}

  async createExample(createExampleRequestDto: CreateExampleRequestDto) {
    this.logger.log('creating....');

    await this.delay(2000);

    const newExample = {
      id: '123',
      name: createExampleRequestDto.name,
      address: createExampleRequestDto.address,
    };
    return newExample;
  }

  async upload(formData: FormDataUploadDto, file) {
    this.logger.log('uploading....');
    this.logger.log(formData);
    this.logger.log(file);
    await this.delay(2000);
  }

  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
