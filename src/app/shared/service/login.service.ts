import { Injectable } from '@angular/core';
import { sendRequest } from '../interface-api';
import { Http } from '@angular/http';
@Injectable()
export class LoginService {
  private loginUrl = 'itv-html/script/iTvControl.js';
  constructor(private http: Http) { }
  getLogin() {
    let demo = 'sss';
    demo += 'in';
    return sendRequest(this.loginUrl, this.http);
  }
}
