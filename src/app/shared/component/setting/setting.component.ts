import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Output() OnClose: EventEmitter<any> = new EventEmitter<any>();
  @Input() userHeadPortrait: String;
  private languages = [];
  private defaultLange: String;
  private userName: any;
  private uploader: FileUploader = new FileUploader({
    url: 'file:\\\D:\\Work_YJ\\MyWorkSapce\\iBlog\\src\\assets\\image',
    method: "POST",
    itemAlias: "uploadedfile"
  });
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
  selectedFileOnChanged() {
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功   
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log(tempRes);
      } else {
        console.log('error');
        // 上传文件后获取服务器返回的数据错误
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
    this.uploader.destroy();
  }
  onCloseClick() {
    const closeObj = {
      name: 'Personal',
      boolean: false
    };
    this.OnClose.emit(closeObj);
  }
}
