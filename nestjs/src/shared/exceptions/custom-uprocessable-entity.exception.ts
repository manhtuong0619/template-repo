import { UnprocessableEntityException } from '@nestjs/common';

import { ClientErrorDetails } from '../dtos/common.dtos';

export class CustomUnprocessableEntityException extends UnprocessableEntityException {
  constructor(public readonly body: { details: ClientErrorDetails[] }) {
    super(body);

    this.message = 'Unprocessable Entity Exception';
  }
}
