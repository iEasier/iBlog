import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { CommonService } from '../../../shared/service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Input() userHeadPortrait: String;
  private languages = [];
  private defaultLange: String;
  private userName: any;
  private isLogin: Boolean = false;

  constructor(
    private translate: TranslateService,
    private commonService: CommonService
  ) {
    this.languages = this.translate.getLangs();
    this.isLogin = this.commonService.getTurnPage().isLogin;
    if (!this.isLogin) {
      this.commonService.setTurnPage('Login');
    }
  }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }
  switchLange() {
    this.defaultLange = this.translate.getDefaultLang();
    if (this.languages[0] === this.defaultLange) {
      this.translate.setDefaultLang(this.languages[1]);
    } else {
      this.translate.setDefaultLang(this.languages[0]);
    }
  }
  /**
   * 上传头像
   * @memberof SettingComponent
   */
  upLoad() {
    console.log('上传');
  }
}
