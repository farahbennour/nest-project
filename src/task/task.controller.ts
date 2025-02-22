import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from './model/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create')
    createTask (@Body() task : Task ) : Task[]{
      return this.taskService.createTask(task)
    }
  @Get()
  findAll() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOneTask(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task : Task) {
    return this.taskService.updateTask(+id, task );
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(+id);
  }
}



