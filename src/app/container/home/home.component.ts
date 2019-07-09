import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TODOMOCK} from '../../mock/todo.mock';
import {TimeControlService} from '../../service/time-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  loaderBarValue: number;
  taskList = [...TODOMOCK];
  mainTask = TODOMOCK[0];
  subTasks = [];
  isCounting = false;
  constructor(private timeControl: TimeControlService) { }

  ngOnInit() {
    this.refreshTaskList();
  }

  ngAfterViewInit(): void {
  }

  setLoaderBar(percentage) {
    this.loaderBarValue = percentage;
  }
  refreshTaskList() {
     this.subTasks = this.taskList.filter( task => task.id !== this.mainTask.id);
  }

  clickTimer() {
    this.isCounting = !this.isCounting;
    this.isCounting ? this.timeControl.set('start') : this.timeControl.set('pause');

  }
  changeTask(task) {
    this.mainTask = task;
    this.isCounting = false;
    this.timeControl.set('reset');
    this.refreshTaskList();
  }
}
