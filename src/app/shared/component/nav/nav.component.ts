import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private isLogin: Boolean = false;
  private isOpenPersonal: Boolean = false;
  private isOpenLogin: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  userInfo() {
    if (this.isLogin) {
      this.isOpenPersonal = true;
    } else {
      this.isOpenLogin = true;
    }
  }
}
