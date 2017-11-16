import { Component, OnInit } from '@angular/core';
import { iBlogConst } from '../../../shared/const';
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
  }
}
