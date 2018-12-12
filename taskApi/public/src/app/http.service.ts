import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {

  }

  getTasks() {


    return this._http.get('/tasks');
 }

 createTask(newTask) {
   return this._http.post('/tasks', newTask);
 }

deleteTask(id) {
  console.log('DELETE TASK EXECUTED!', id);
  return this._http.delete(`/tasks/${id}`);
}

 addTask(newtask) {
  return this._http.post('/task', newtask);
}

edit(id, edittask) {
  return this._http.put(`/update/${id}`, edittask);
}

}


