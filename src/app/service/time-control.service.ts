import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeControlService {

  clickTime = new Subject<string>();
  clickTime$ = this.clickTime.asObservable();

  constructor() {
  }

  set(sign) {
    this.clickTime.next(sign);
  }
}
