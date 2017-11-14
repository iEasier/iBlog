import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../service';
import { TranslateService } from 'ng2-translate';

const CHECK_INPUT = {
  USERNAME: 'username',
  PASSWORD: 'password',
  RESET_USERNAME: 'reSetUsername',
  RESET_PASSWORD: 'reSetPassword'
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // 展示错误信息
  private usernameTips = {
    successTip: false,
    errorTip: false,
    message: ''
  };

  private passwordTips = {
    successTip: false,
    errorTip: false,
    message: ''
  };
  private showErrorTip: Boolean = false;
  private username = 'username';
  private password = 'password';
  private userName: any;
  private passWord: any;
  private remember: any;
  constructor(
    private commonService: CommonService,
    private translate: TranslateService) {
    this.remember = localStorage.getItem('remrmberMe') === 'true';
    if (this.remember) {
      this.userName = localStorage.getItem('userName');
      this.passWord = localStorage.getItem('passWord');
    } else {
      localStorage.removeItem('userName');
      localStorage.removeItem('passWord');
    }
  }

  ngOnInit() {


  }
  Login() {
    this.usernameTips = {
      successTip: false,
      errorTip: false,
      message: ''
    };
    this.passwordTips = {
      successTip: false,
      errorTip: false,
      message: ''
    };
    const username = $('#username').val();
    const password = $('#password').val();
    const remrmberMe = $('#remember').is(':checked');
    localStorage.setItem('remrmberMe', remrmberMe);
    localStorage.setItem('userName', username);
    localStorage.setItem('passWord', password);
    const request = {
      username: username,
      password: password
    };
    this.commonService.getLogin(request).then((result: any) => {
      if (result.retcode === '0') {
        const userInfo = result.userinfo;
        const userHeadPortrait = '../assets/image/user.jpg';
        sessionStorage.setItem('userHeadPortrait', userInfo.headPhoto ? userInfo.headPhoto : userHeadPortrait);
        sessionStorage.setItem('userName', userInfo.nick);   // this name from mysql;
        this.commonService.setTurnPage('Home', { isLogin: true });
      } else {
        this.passwordTips.message = this.translate.instant('userLogin.error');
        this.passwordTips.errorTip = true;
      }
    });
  }

  // 检查输入
  checkInput(type: string) {
    switch (type) {
      case CHECK_INPUT.USERNAME:
        const username = $('#username').val();
        if (!username) {
          this.usernameTips.message = this.translate.instant('userLogin.errorNullUserName');
          this.usernameTips.errorTip = true;
        }
        break;
      case CHECK_INPUT.PASSWORD:
        const password = $('#password').val();
        if (!password) {
          this.passwordTips.message = this.translate.instant('userLogin.errorNullPassword');
          this.passwordTips.errorTip = true;
        }
        break;
      case CHECK_INPUT.RESET_USERNAME:
        this.usernameTips = {
          successTip: false,
          errorTip: false,
          message: ''
        };
        break;
      case CHECK_INPUT.RESET_PASSWORD:
        this.passwordTips = {
          successTip: false,
          errorTip: false,
          message: ''
        };
        break;
    }
  }
}
