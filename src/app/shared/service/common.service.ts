import { Injectable } from '@angular/core';
import { sendRequest, sendGetRequest } from '../interface-api';
import { Http } from '@angular/http';
@Injectable()
export class CommonService {
  private loginUrl = 'iBlog/Authentication';
  private getWriteNoteUrl = 'iBlog/getWriteNote';
  private getTestUrl = 'iBlog/Test';
  constructor(private http: Http) { }

  getLogin(request) {
    return sendRequest(this.loginUrl, this.http, request);
  }
  getWriteNote(request) {
    return sendRequest(this.getWriteNoteUrl, this.http, request);
  }
  getTest(request) {
    return sendGetRequest(this.getTestUrl, this.http);
  };
}
