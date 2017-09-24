import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../service';
import { TranslateService } from 'ng2-translate';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() OnClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginSuc: EventEmitter<any> = new EventEmitter<any>();
  private areas = ['安徽省', '江苏省'];
  // 展示错误信息
  private showErrorTip: Boolean = false;
  private username = 'username';
  private password = 'password';
  constructor(
    private commonService: CommonService,
    private translate: TranslateService) {

  }

  ngOnInit() {


  }
  Login() {
    const CLOSE_OBJ = {
      name: 'Login',
      boolean: false
    };
    const username = $('#username').val();
    const password = $('#password').val();
    const request = {
      username: username,
      password: password
    };
    this.commonService.getLogin(request).then((result: any) => {
      if (result.retcode === '0') {
        const userInfo = result.userinfo;
        const userHeadPortrait = '../assets/image/user.jpg';
        sessionStorage.setItem('userHeadPortrait', userInfo.headPhoto ? userInfo.headPhoto : userHeadPortrait);
        sessionStorage.setItem('userName', userInfo.nick);
        this.OnClose.emit(CLOSE_OBJ);
        this.loginSuc.emit(true);    // this name from mysql;
      } else {
        this.showErrorTip = true;
      }
    });
  }
  clearErrorTip() {
    this.showErrorTip = false;
  }
  onCloseClick() {
    const CLOSE_OBJ = {
      name: 'Login',
      boolean: false
    };
    this.OnClose.emit(CLOSE_OBJ);
  }
  resetClick() {
    this.showErrorTip = false;
  }
  regClick() {
    const request = {
      username: 'Fliang',
      password: '123',
      nick: '_.Xiao',
      headPhoto: './assets/image/iBlog.png',
      telephone: '15855246580',
      address: '南京'
    };
    this.commonService.addUserInfo(request);
  }
}
