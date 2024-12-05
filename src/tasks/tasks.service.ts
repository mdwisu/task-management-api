import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  // create task
  async create(createTaskDro: CreateTaskDto) {
    const task = this.tasksRepository.create(createTaskDro);
    return this.tasksRepository.save(task);
  }
  // find all tasks
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  // find one task
  // Get one task by ID
  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id: +id } });
  }

  // Update task
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.tasksRepository.update(id, updateTaskDto);
    return this.findOne(id);
  }

  // Delete task
  async remove(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
