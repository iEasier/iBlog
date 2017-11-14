import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private needShowHome: Boolean = true;
  private needShowWriteNote: Boolean = false;
  private needShowPhotos: Boolean = false;
  private isLogin: Boolean = false;
  constructor(
    private commonService: CommonService
  ) {
    this.isLogin = this.commonService.getTurnPage().isLogin;
    if (!this.isLogin) {
      this.commonService.setTurnPage('Login');
    }
  }

  ngOnInit() {
  }
  turnPage(page) {
    this.needShowHome = false;
    this.needShowWriteNote = false;
    this.needShowPhotos = false;
    switch (page) {
      case 'Home':
        this.needShowHome = true;
        break;
      case 'WriteNote':
        this.needShowWriteNote = true;
        break;
      case 'Photos':
        this.needShowPhotos = true;
        break;
      default:
        break;
    }
  }
}
