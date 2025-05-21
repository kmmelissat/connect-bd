import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createTask(title: string, userId: number): Promise<Task> {
    if (!title || title.trim().length === 0) {
      throw new BadRequestException('Title cannot be empty');
    }

    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newTask = this.tasksRepository.create({
      title: title.trim(),
      completed: false,
      user,
    });
    return this.tasksRepository.save(newTask);
  }

  async getTasks(): Promise<Task[]> {
    return this.tasksRepository.find({
      relations: ['user'],
      order: {
        id: 'DESC',
      },
    });
  }

  async getTaskById(id: number): Promise<Task> {
    if (!id || id <= 0) {
      throw new BadRequestException('Invalid task ID');
    }

    const task = await this.tasksRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async updateTask(id: number, data: Partial<Task>): Promise<Task> {
    if (!id || id <= 0) {
      throw new BadRequestException('Invalid task ID');
    }

    if (data.title && data.title.trim().length === 0) {
      throw new BadRequestException('Title cannot be empty');
    }

    const task = await this.getTaskById(id);

    if (data.title) {
      data.title = data.title.trim();
    }

    Object.assign(task, data);
    return this.tasksRepository.save(task);
  }

  async deleteTask(id: number): Promise<void> {
    if (!id || id <= 0) {
      throw new BadRequestException('Invalid task ID');
    }

    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Task not found');
    }
  }

  async toggleTaskStatus(id: number): Promise<Task> {
    const task = await this.getTaskById(id);
    task.completed = !task.completed;
    return this.tasksRepository.save(task);
  }
}
