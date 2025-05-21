import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({ description: 'The unique identifier of the task' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the task' })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Whether the task is completed or not',
    default: false,
  })
  @Column({ default: false })
  completed: boolean;

  @ApiProperty({ description: 'The user who owns this task', type: () => User })
  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  user: User;
}
