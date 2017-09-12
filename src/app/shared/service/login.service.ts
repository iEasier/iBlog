import { Injectable } from '@angular/core';
import { sendRequest } from '../interface-api';
import { Http } from '@angular/http';
@Injectable()
export class LoginService {
  private loginUrl = 'iBlog/Authentication';
  constructor(private http: Http) { }
  getLogin(request) {
    return sendRequest(this.loginUrl, this.http, request);
  }
}
