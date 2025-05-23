import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
