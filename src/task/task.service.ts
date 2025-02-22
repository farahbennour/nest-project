import { Injectable } from '@nestjs/common';
import { Task } from './model/task';


@Injectable()
export class TaskService {
    [x: string]: any;
   
    private tasks : Task[]=[{ id :1, title : "harry potter", is_finished : false }];
    createTask ( task : Task) : Task[]{
        this.tasks.push(task);
        return this.tasks;
    }
    findAllTasks () : Task[]{
        return this.tasks;
    }
    findOneTask(id: number): Task | null {
        return this.tasks.find(t => t.id === id) || null;
    }
    
    updateTask(id: number, updatedTask: Task): Task | null {
        const task = this.findOneTask(id);
        if (!task) return null; 
        Object.assign(task, updatedTask); 
        return task;
    }
    
     
    
    
    deleteTask(id: number): Task[] {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }
    
}
