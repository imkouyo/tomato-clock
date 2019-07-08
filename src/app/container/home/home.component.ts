import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  loaderBarValue: number;

  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  setLoaderBar(percentage) {
    console.log(percentage);
    this.loaderBarValue = percentage;
  }

}
