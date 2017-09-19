import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() OnClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginSuc: EventEmitter<any> = new EventEmitter<any>();
  private areas = ['安徽省', '江苏省'];
  private isRight: Boolean = false;
  private tips: String = '用户名';
  private needHelp: Boolean = false;
  constructor(
    private commonService: CommonService) {

  }

  ngOnInit() {


  }
  showHelp() {
    this.needHelp = true;
  }
  checkName() {
    this.needHelp = false;
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
        sessionStorage.setItem('userHeadPortrait', userInfo.head_photo ? userInfo.head_photo : userHeadPortrait);
        sessionStorage.setItem('userName', userInfo.nick);
        this.OnClose.emit(CLOSE_OBJ);
        this.loginSuc.emit(true);    // this name from mysql;
      } else {
        this.isRight = true;
      }
    });

  }
  onCloseClick() {
    const CLOSE_OBJ = {
      name: 'Login',
      boolean: false
    };
    this.OnClose.emit(CLOSE_OBJ);
  }
  resetClick() {
    this.isRight = false;
  }
  regClick() {
    const request = {
      username: 'Fliang',
      password: '123',
      nick: '_.Xiao',
      head_photo: './assets/image/iBlog.png',
      telephone: '15855246580',
      address: '南京'
    };
    this.commonService.addUserInfo(request);
  }
}
