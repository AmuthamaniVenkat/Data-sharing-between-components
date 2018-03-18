import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
_data:any;
  constructor() { }

  ngOnInit() {
  }
  sendData(data: any[]) {
    console.log('I am from receiver component');
    console.log(data);
    this._data=data;
}

}
