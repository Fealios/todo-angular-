import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth();
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish Angular homework'),
    new Task('Survive Epicodus'),
    new Task('Get a job'),
    new Task('Get more massages')
  ]
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
