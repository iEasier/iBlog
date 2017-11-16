import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { iBlogConst } from '../../../shared/const';
import { CommonService } from '../../../shared/service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() turnPage: EventEmitter<any> = new EventEmitter<any>();
  @Input() isLogin: Boolean = false;
  private userName: any;
  private userHeadPortrait: String = iBlogConst.DEFAULT_HEADPORTRAIT;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    if (this.isLogin) {
      this.loginSuc();
    } else {
      this.commonService.setTurnPage('Login');
    }
  }
  /**
   * 跳转至用户管理页面
   * @memberof NavComponent
   */
  userInfo() {
    this.commonService.setTurnPage('Setting', { isLogin: this.isLogin });
  }
  loginSuc() {
    this.userName = sessionStorage.getItem('userName');
    const HeadPortrait = sessionStorage.getItem('userHeadPortrait');
    this.userHeadPortrait = HeadPortrait == null ? iBlogConst.DEFAULT_HEADPORTRAIT : HeadPortrait;
  }
  goPage(page) {
    this.turnPage.emit(page);
  }
}
