import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {reduce} from 'rxjs/operators';
import {Subscription, TimeInterval} from 'rxjs';
import {TimeControlService} from '../../service/time-control.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() countDown = new EventEmitter<number>();
  @Input() isCounting;

  TIMEUNIT = 1500;

  min: number;
  sec: number;
  timeAccumulator: number;
  sumTime: number;

  interval: number;

  timeSubscription = new Subscription();

  constructor(private timeControlService: TimeControlService) {
    this.reset();
  }


  ngOnInit() {
    this.timeSubscription = this.timeControlService.clickTime$.subscribe(sign => {
      if (sign === 'start') {
        this.onStart();
      } else if (sign === 'pause') {
        this.onPause();
      } else if (sign === 'reset') {
        this.reset();
        this.onPause();
      }
    });
  }
  reset() {
    this.timeAccumulator = 0;
    this.sumTime = this.TIMEUNIT;
    this.min = Math.floor(this.sumTime / 60);
    this.sec = this.sumTime % 60;
  }


  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }


  onStart() {
      this.interval = setInterval(() => {
      this.timeAccumulator += 1;
      this.sumTime -= 1;
      this.min = Math.floor(this.sumTime / 60);
      this.sec = this.sumTime % 60;
      this.countDown.emit(Math.floor(this.timeAccumulator * 100 / this.TIMEUNIT));
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
