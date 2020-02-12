import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {


  constructor() { }
  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {}
  ques = ["いません・・・", "1~3人", "4人以上"];
  onClick(num) {
    this.event.emit(
      this.ques[num]
    );
  }
}
