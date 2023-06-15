import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  item:any
  countdown:any
  minutes!:number
  seconds!:number
  constructor() {
    this.item = []
    this.resetValues()
    this.countdown = moment({hour:0,minute:10,second:0,millisecond:0});
    this.minutes = this.countdown.minutes()
    this.seconds = this.countdown.seconds()
  }

  changeItemValue( pos:number){
    if (this.item[pos] == 1){
      this.item[pos] = 0
    }else{
      this.resetValues()
      this.item[pos] = 1
    }
  }

  resetValues(){
    this.item[0]=0
    this.item[1]=0
    this.item[2]=0
  }
}
