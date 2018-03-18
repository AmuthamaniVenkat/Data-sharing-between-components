import { Component, OnInit,AfterViewInit } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,AfterViewInit{
 message='test dashboard';
  constructor() { }

  ngOnInit() {
  }
  sendData(data: any[]) {
    debugger;
    console.log('I am from home component');
    console.log(data);
    this.message=data[0];
}
ngAfterViewInit(){
  debugger;
}

}
