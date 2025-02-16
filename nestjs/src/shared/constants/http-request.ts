export const GLOBAL_ROOT_PREFIX = 'api';

export const REDACTED_FIELD_MESSAGE = 'This is redacted';

export enum HeaderKey {
  AUTHORIZATION = 'Authorization',
  GUID = 'x-guid',
  X_REQUEST_ID = 'x-request-id',
  PUBLIC_KEY = 'public-key',
}

export enum RedactedHeaderKey {
  AUTHORIZATION = 'authorization',
}

export enum QueryKey {
  REFRESH_TOKEN = 'refreshToken',
}
