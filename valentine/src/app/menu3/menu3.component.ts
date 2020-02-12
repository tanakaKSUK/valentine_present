import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.scss']
})
export class Menu3Component implements OnInit {


  constructor() { }
  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {}
  ques = ["下位20%くらいかな", "可もなく不可もなく", "上位5%には入るよ"];
  onClick(num) {
    this.event.emit(
      this.ques[num]
    );
  }
}
