import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  newTask = {
    'title': '',
    'description': ''
  };
  editTask = {
    'title': '',
    'description': ''
  };



  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTasksFromService();

  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      console.log( data);
      this.tasks = data['tasks'];
  });
}

  makeTask() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe( data => {
      console.log(data);
      this.getTasksFromService();
      this.newTask = {
        'title': '',
        'description': ''
      };
    });
  }

  edit(task_id) {
    console.log('EDIT TASK EXECUTED!', task_id);
    console.log('EDIT TASK EXECUTED!', task_id);
    console.log('EDIT TASK EXECUTED!', task_id);
    let observable = this._httpService.edit(task_id, this.editTask);
    observable.subscribe( data => {
      console.log(data);
      this.getTasksFromService();
      this.editTask = {
        'title': '',
        'description': ''
      };
    });
  }

  removeTask(task_id) {

    let observable = this._httpService.deleteTask(task_id);
    console.log('REMOVE TASK EXECUTED!', task_id);
    observable.subscribe( (data) => {
      this.getTasksFromService();
    });
  }
}
//   onButtonClick(): void {
//     console.log(`Click event is working`);
// }
// onButtonClickParam(num: Number): void {
//     console.log(`Click event is working with num param: ${num}`);
// }
// onButtonClickParams(num: Number, str: String): void {
//     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// }
// onButtonClickEvent(event: any): void {
//     console.log(`Click event is working with event: ${event}`);
// }

