import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'first_name', length: 30 })
  firstName: string;

  @Column({ name: 'last_name', length: 30 })
  lastName: string;

  @Column({ name: 'email', length: 100 })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'photo_link' })
  photoLink: string;
}
