import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private needShowHome: Boolean = true;
  private needShowWriteNote: Boolean = false;
  private needShowPhotos: Boolean = false;
  constructor() { }

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
