import { Component, OnInit } from '@angular/core';
import { iBlogConst } from '../../const';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  private homeImgArray = iBlogConst.HOME_IMG;
  private index: any = iBlogConst.DEFAULT_HOMEINDEX;
  private homeImg = iBlogConst.HOME_IMG[this.index];
  constructor() { }

  ngOnInit() {
    $('#homeContent').css({ 'background-image': 'url(' + this.homeImg + ')' });
  }
  onLeft() {
    if (this.index > 0) {
      this.homeImg = iBlogConst.HOME_IMG[this.index - 1];
    $('#homeContent').css({ 'background-image': 'url(' + this.homeImg + ')' });
      this.index--;
    }
  }
  onRight() {
    if (this.index < iBlogConst.HOME_IMG.length - 1) {
      this.homeImg = iBlogConst.HOME_IMG[this.index + 1];
    $('#homeContent').css({ 'background-image': 'url(' + this.homeImg + ')' });
      this.index++;
    }
  }
}
