import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // method get all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  //   get task by  id

  getTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  //   update task

  updateTask(id: string, status: TaskStatus): void {
    const task = this.getTask(id);
    task.status = status;
  }
}
