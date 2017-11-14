import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Output() OnClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginOut: EventEmitter<any> = new EventEmitter<any>();
  @Input() userHeadPortrait: String;
  private languages = [];
  private defaultLange: String;
  private userName: any;

  constructor(
    private translate: TranslateService
  ) {
    this.languages = this.translate.getLangs();
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
  upLoad() {
    // 暂时放置
    console.log('上传');
  }

  onCloseClick() {
    const closeObj = {
      name: 'Personal',
      boolean: false
    };
    this.OnClose.emit(closeObj);
  }
  onLoginOut() {
    this.loginOut.emit(false);
  }
}
