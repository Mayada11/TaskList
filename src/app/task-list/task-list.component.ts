import { Component, OnInit } from '@angular/core';
import { TaskListServiceService } from 'src/app/shared/task-list-service.service';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  TaskLists: any;
  div1: boolean = false;
  div2: boolean = false;
  constructor(public taskLists: TaskListServiceService) {}

  ngOnInit(): void {
    this.taskLists.getALLTasks().subscribe(
      (res) => {
        let response: any = res;
        console.log(response);
        this.TaskLists = response;
        console.log(this.TaskLists.taskListId);
        if (response.success) {
          console.log(this.TaskLists);
          console.log(this.TaskLists.Task_List_Title);
        }
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
  deleteTask(taslListId: any, e: any) {
    e.stopPropagation();
    console.log(taslListId);
    this.taskLists.deleteTask(taslListId).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
  showDiv() {
    if (this.div1) {
      this.div1 = false;
    } else {
      this.div1 = true;
    }
  }
  onEditTask(
    _id: any,
    _title: string,
    _description: string,
    _Asignee: string,
    _project: string,
    _date: Date
  ) {
    console.log(_title);
    console.log(_description);
    console.log(_Asignee);
    console.log(_project);
    console.log(_date);
    let fd1 = {
      taskListId: _id,
      taskListTitle: _title,
      taskListDetails: _description,
      assigneeName: _Asignee,
      project: _project,
      date: _date,
    };

    this.taskLists.EditTask(_id, fd1).subscribe((data) => {
      console.log(data);

      window.location.reload();
    });
  }

  onSubmitTask(
    _title: string,
    _description: string,
    _Asignee: string,
    _project: string,
    _date: Date
  ) {
    console.log(_title);
    console.log(_description);
    console.log(_Asignee);
    console.log(_project);
    console.log(_date);

    let fd = {
      taskListTitle: _title,
      taskListDetails: _description,
      assigneeName: _Asignee,
      project: _project,
      date: _date,
    };

    this.taskLists.AddNewTask(fd).subscribe((data) => {
      console.log(data);

      window.location.reload();
    });
  }
}
