import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks"
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string
  @Input({required:true}) name!:string
  isAddingTask = false;
  tasks = dummyTasks

  get selectedUserId(){
    return this.tasks.filter((tasks) => this.userId === tasks.userId)
  }

  onCompletedTask(id: string){
    this.tasks = this.tasks.filter((tasks) => tasks.id != id)
  }

  onStartAddTask(){
    this.isAddingTask = true;

  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate: taskData.date
    })

    this.isAddingTask = false
  }

 
}
