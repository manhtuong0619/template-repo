import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FindArgs {
  @ApiProperty({
    required: false,
    description: 'search/filter data by ids',
  })
  ids?: string | string[];

  @ApiProperty({
    required: false,
    description: 'search by keyword',
  })
  q?: string;

  @ApiProperty({
    required: false,
    description: 'offset',
    default: 0,
  })
  offset: number;

  @ApiProperty({
    required: false,
    description: 'limit',
    default: 100,
  })
  limit: number;

  @ApiProperty({
    required: false,
    description: 'Order result, e.g. order=createdAt:DESC',
  })
  order?: string;
}

/**
 * Pagination Result
 */
export class PaginationResult<T> {
  @ApiProperty()
  offset: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  total: number;

  @ApiProperty({
    type: Boolean,
  })
  hasNext = false;

  items: T[];
}

/**
 * Generate pagination result
 */
export const generatePaginationResult = <T>(
  items: T[],
  total: number,
  offset: number,
  limit: number
): PaginationResult<T> => {
  const result = new PaginationResult<T>();

  result.offset = offset;
  result.limit = limit;
  result.total = total;
  result.hasNext = result.offset + result.limit < result.total;
  result.items = items;

  return result;
};

/**
 * Generate empty page result
 */
export const generateEmptyPage = <T>(args: FindArgs): PaginationResult<T> => {
  return generatePaginationResult([], 0, args.offset, args.offset);
};

export class PaginateDto {
  @IsOptional()
  skip: number;

  @IsOptional()
  take: number;
}

/**
 * Client error
 */
export class ClientErrorDetails {
  @ApiProperty({ required: false })
  field?: string;

  @ApiProperty()
  issue: string;

  @ApiProperty({ required: false })
  childrenDetails?: ClientErrorDetails[];
}

export class ErrorResponseBody {
  @ApiProperty()
  request_id: string;

  @ApiProperty()
  message: string;

  @ApiPropertyOptional({
    type: ClientErrorDetails,
  })
  details: ClientErrorDetails[];
}
