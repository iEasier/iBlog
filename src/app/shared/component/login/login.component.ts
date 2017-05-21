import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    const password = $('#password').val();
    console.log(password);
    // this.loginService.getLogin();
  }
}
