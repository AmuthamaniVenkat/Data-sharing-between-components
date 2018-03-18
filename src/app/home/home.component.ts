import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  _data: any[];
    constructor() {
        this._data = ['prashobh', 'angular', 'developer'];
    }

    @ViewChild(DashboardComponent) DashboardComponent: DashboardComponent;
    shareData() {
      debugger;
        this.DashboardComponent.sendData(this._data);
        this.DashboardComponent.message='home message';
    }

    ngAfterViewInit(){
      debugger;
     console.log(this.DashboardComponent.message) ;
    }
}
