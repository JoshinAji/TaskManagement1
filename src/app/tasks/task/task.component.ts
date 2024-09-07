import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

interface Task {
  id:string,
  userId:string,
  title: string,
  summary: string,
  dueDate:string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task
  @Output() complete = new EventEmitter();

  onCompletedTask(){
    this.complete.emit(this.task.id)
  }
 
}