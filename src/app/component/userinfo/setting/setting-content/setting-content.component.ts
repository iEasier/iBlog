import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-setting-content',
  templateUrl: './setting-content.component.html',
  styleUrls: ['./setting-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingContentComponent implements OnInit {
  public baseinfos = [{ name: '昵称', value: '__.小猫咪' }, { name: '姓名', value: '张三' },
  { name: '性别', value: '男' }, { name: '生日', value: '2017年10月1日' }, {
    name: '身高', value: '175 cm'
  }];
  constructor() { }

  ngOnInit() {
  }

}
