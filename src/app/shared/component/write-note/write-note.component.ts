import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.css']
})
export class WriteNoteComponent implements OnInit {
  private writeNotes = [];
  constructor() { }

  ngOnInit() {
  }
  saveWrite() {
    // Some Option to do ...
    const topName = $('#topName').val();
    const content = $('.write').val();
    const obj = {
      topName: topName,
      content: content
    };
    this.writeNotes.push(obj);
    console.log('主题' + topName);
    console.log('内容：' + content);
    $('#topName').val('');
    $('.write').val('');
  }
}
