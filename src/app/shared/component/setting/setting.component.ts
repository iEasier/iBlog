import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private languages = [];
  private defaultLange: String;
  constructor(
    private translate: TranslateService
  ) {
    this.languages = this.translate.getLangs();
  }

  ngOnInit() {


  }
  switchLange() {
    this.defaultLange = this.translate.getDefaultLang();
    if (this.languages[0] === this.defaultLange) {
      this.translate.setDefaultLang(this.languages[1]);
    } else {
      this.translate.setDefaultLang(this.languages[0]);
    }
  }
}
