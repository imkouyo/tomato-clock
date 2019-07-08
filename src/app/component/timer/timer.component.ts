import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {reduce} from 'rxjs/operators';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  TIMEUNIT = 1500;
  min: number;
  sec: number;
  sumtime = this.TIMEUNIT;
  @Output() countDown = new EventEmitter<number>();
  interval: number;
  constructor() { }

  ngOnInit() {
    let timeAccumulator = 0;
    this.interval = setInterval(() => {
      timeAccumulator += 1;
      this.min = Math.floor(this.sumtime / 60);
      this.sec = this.sumtime % 60;
      this.sumtime -= 1;
      this.countDown.emit(Math.floor(timeAccumulator * 100 / this.TIMEUNIT));
    }, 1000 );
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}
