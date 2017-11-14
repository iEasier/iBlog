import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service';
@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.css']
})
export class WriteNoteComponent implements OnInit {
  private writeNotes = [];
  private init = 0;
  constructor(
    private commonService: CommonService
  ) {
    // this.commonService.getWriteNote({ username: 'fangliang' });
  }

  ngOnInit() {
    if (this.init < 100) {
      this.init += 1;
      setTimeout(() => {
        const process = this.init + '%';
        if (this.init > 50) {
          $('#progress').css('width', process);
          $('#progress').addClass('progress-bar progress-bar-danger');
        } else {
          $('#progress').css('width', process);
        }
        this.ngOnInit();
      }, 100);
    }
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
