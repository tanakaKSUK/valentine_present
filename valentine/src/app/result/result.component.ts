import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }
  omedetou;
  ngOnInit(): void {
    if(this.pName=="チョコ"){
      this.omedetou = "僕はかわいそうな君のことが好きだよ。これからも頑張ってください。"
    }
  }
  @Input() imgpath: string;
  @Input() pName: string;
  @Output() event = new EventEmitter<string>();
  onClick() {
    this.event.emit(
     
    );
  }
}
