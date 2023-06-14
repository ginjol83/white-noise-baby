import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  item:any
  constructor() {
    this.item=[]
    this.resetValues()
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
