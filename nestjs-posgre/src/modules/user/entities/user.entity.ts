import { AuditableEntity } from 'src/shared/entities/auditable.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: true, default: null })
  email: string;

  @Column({ unique: true })
  username: string;
}
