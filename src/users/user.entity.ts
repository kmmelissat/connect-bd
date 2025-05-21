import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The name of the user' })
  @Column()
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  @Column()
  email: string;

  @ApiProperty({
    description: 'The tasks associated with this user',
    type: () => [Task],
  })
  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
