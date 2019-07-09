import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { TimerComponent } from './component/timer/timer.component';
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';
import { HomeComponent } from './container/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import { MissionInputComponent } from './component/mission-input/mission-input.component';
import {TimeControlService} from './service/time-control.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TimerComponent,
    SideNavbarComponent,
    HomeComponent,
    HeaderComponent,
    MissionInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [TimeControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
