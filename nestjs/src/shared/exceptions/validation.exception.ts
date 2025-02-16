import { ClientErrorDetails } from '../dtos/common.dtos';

import { CustomBadRequestException } from './custom-bad-request.exception';

export class ValidationException extends CustomBadRequestException {
  constructor(public readonly body: { details: ClientErrorDetails[] }) {
    super(body);
  }
}
