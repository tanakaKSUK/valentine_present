import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valentine';

  answer = "";
  answer2 = "";
  answer3 = "";
  pageNumber = 0;
  resultImg;
  presentName;
  onParent(event,num) {

    if(num==1){
      this.answer = event; 
      this.pageNumber = 2;
    }else if(num==2){
      this.answer2 = event;
      this.pageNumber = 3;
    }else{
      this.answer3 = event;
      this.pageNumber = 4; 
      this.resultImg = this.createImgPath(this.answer, this.answer2, this.answer3);
      this.presentName = this.createPresentName(this.answer, this.answer2, this.answer3);
    }
    console.log("test", event, num)
   
  }
  start(){
    this.pageNumber = 1;
  }
  reStart() {
    this.pageNumber = 1;
  }
  createImgPath(answer, answer2, answer3){
    let imgpath = "../../assets/result/";
    if (answer == "0コ"){
      imgpath += "c1";
    } else if (answer == "1~3コ"){
      imgpath += "u1";
    }else{
      imgpath += "t1";
    }

    if (answer2 == "いません・・・") {
      imgpath += "c2";
    } else if (answer2 == "1~3人") {
      imgpath += "u2";
    } else {
      imgpath += "t2";
    }

    if (answer3 == "下位20%くらいかな") {
      imgpath += "c3";
    } else if (answer3 == "可もなく不可もなく") {
      imgpath += "u3";
    } else {
      imgpath += "t3";
    }

    return imgpath +".png";
  }
  createPresentName(answer, answer2, answer3) {
    let name ="";
    if (answer == "0コ") {
      name += "チ";
    } else if (answer == "1~3コ") {
      name += "ウ";
    } else {
      name += "ち";
    }

    if (answer2 == "いません・・・") {
      name += "ョ";
    } else if (answer2 == "1~3人") {
      name += "ン";
    } else {
      name += "ん";
    }

    if (answer3 == "下位20%くらいかな") {
      name += "コ";
    } else if (answer3 == "可もなく不可もなく") {
      name += "チ";
    } else {
      name += "こ";
    }

    return name;
  }
}
