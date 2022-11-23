import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty()
  @Column({ name: 'first_name', length: 30 })
  firstName: string;

  @ApiProperty()
  @Column({ name: 'last_name', length: 30 })
  lastName: string;

  @ApiProperty()
  @Column({ name: 'email', length: 100 })
  email: string;

  @ApiProperty()
  @Column({ name: 'password' })
  password: string;

  @ApiProperty()
  @Column({ name: 'photo_link' })
  photoLink: string;
}
