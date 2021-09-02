import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaskListServiceService {
  ApiURl="https://localhost:44390";
  constructor(public httpclient:HttpClient) { 

  }
  getALLTasks(){
    return this.httpclient.get(`${this.ApiURl}/api/TaskLists`);
  }
  deleteTask(_id:any){
    return this.httpclient.delete(`${this.ApiURl}/api/TaskLists/${_id}`);
  }
  AddNewTask(fd:any){
    console.log(fd);
    return this.httpclient.post(`${this.ApiURl}/api/TaskLists`,fd);
  }
  EditTask(_id:any,fd1:any){
    return this.httpclient.put(`${this.ApiURl}/api/TaskLists/${_id}`,fd1);
  }
}
