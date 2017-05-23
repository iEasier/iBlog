import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goSearch() {
    const searContent = $('#search').val();
    console.log('Do Some Search from MySql' + searContent);
  }
  onKeyDown(event) {
    const evenType = event.key;
    switch (evenType) {
      case 'Enter':
        const searContent = $('#search').val();
        console.log('Do Some Search from MySql' + searContent);
        break;
      default:
        break;
    }
  }
}
