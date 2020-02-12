import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {}
  ques = ["0コ", "1~3コ","4コ以上"];
  onClick(num) {
    this.event.emit(
      this.ques[num]
    );
  }
}
