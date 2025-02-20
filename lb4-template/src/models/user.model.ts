import {Entity, model, property} from '@loopback/repository';

@model({ settings: { postgresql: { schema: 'public', table: 'users' } } })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'uuid',
      nullable: 'NO',
    },
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'username',
      dataType: 'varchar',
      length: 255,
      nullable: 'NO',
    },
  })
  username: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'email',
      dataType: 'varchar',
      length: 255,
      nullable: 'YES',
    },
  })
  email?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
