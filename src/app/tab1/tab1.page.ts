import { Component } from '@angular/core';
import db from "./db.json";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  audio = new Audio();
  sounds = db 

  constructor() {
    this.resetValues()
  }

  changeSoundsValue( pos:number){
    if (this.sounds[pos].play == 1){
      this.sounds[pos].play = 0
      this.audio.pause()
    }else{
      this.resetValues()
      this.sounds[pos].play = 1
      this.playAudio(pos)
    }
  }

  resetValues(){
    for(let i of this.sounds){
      i.play=0
    }   
  }

  playAudio (pos: number) {
    this.audio.src = this.sounds[pos].src
    this.audio.load();
    this.audio.play();
    this.audio.loop=true;
  }
}