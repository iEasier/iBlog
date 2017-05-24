import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../service';
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
    private loginService: LoginService) {

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
    // this.loginService.getLogin();
    if ('qqq' === password && 'qqq' === username) {
      this.OnClose.emit(CLOSE_OBJ);
      this.loginSuc.emit(true);    // this name from mysql;
      const userName = 'IT丶小人物';
      const userHeadPortrait = '../assets/image/2.jpeg';
      sessionStorage.setItem('userHeadPortrait', userHeadPortrait);
      sessionStorage.setItem('userName', userName);
    } else {
      this.isRight = true;
    }
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
}