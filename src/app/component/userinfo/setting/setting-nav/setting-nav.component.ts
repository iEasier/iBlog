import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { List } from 'underscore';

@Component({
  selector: 'app-setting-nav',
  templateUrl: './setting-nav.component.html',
  styleUrls: ['./setting-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingNavComponent implements OnInit {
  public navs: List<String> = ['基本信息', '账户管理', '账户设置', '系统设置', '语言调整', '隐私安全', '账户状态'];
  public showtimes: any;
  public isSelect: any = this.navs[0];
  constructor() { }

  ngOnInit() {
  }

  OnFocus(nav: string) {
    this.isSelect = nav;
  }
}
