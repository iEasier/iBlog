import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iBlogConst } from '../../const';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() turnPage: EventEmitter<any> = new EventEmitter<any>();
  private isLogin: Boolean = false;
  private isOpenPersonal: Boolean = false;
  private isOpenLogin: Boolean = false;
  private userName: any;
  private userHeadPortrait: String = iBlogConst.DEFAULT_HEADPORTRAIT;
  constructor() { }

  ngOnInit() {
  }
  userInfo() {
    if (this.isLogin) {
      this.isOpenPersonal = true;
    } else {
      this.isOpenLogin = true;
    }
  }
  onCloseClick(closeObj) {
    if (closeObj && closeObj.name === 'Login') {
      this.isOpenLogin = closeObj.boolean;
    } else {
      this.isOpenPersonal = closeObj.boolean;
    }
  }
  loginSuc(Login) {
    this.isLogin = Login;
    this.userName = sessionStorage.getItem('userName');
    const HeadPortrait = sessionStorage.getItem('userHeadPortrait');
    this.userHeadPortrait = HeadPortrait == null ? iBlogConst.DEFAULT_HEADPORTRAIT : HeadPortrait;
  }
  goPage(page) {
    this.turnPage.emit(page);
  }
}
