import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  @Output() shareDataEvent = new EventEmitter();

  _data: any[];

  constructor() {
    this._data = [{
      Company: 'Pip Fifer',
      Contact: '2345678',
      Country: 'India'

    }, {
      Company: 'Google',
      Contact: '2345678',
      Country: 'India'

    }, {
      Company: 'Hooly',
      Contact: '2345678',
      Country: 'India'

    }];
  }
  shareData() {
    console.log('I am from sender component');
    this.shareDataEvent.emit(this._data);
  }

  ngOnInit() {
  }

}
