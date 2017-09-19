import { Injectable } from '@angular/core';
import { sendRequest, sendGetRequest } from '../interface-api';
import { Http } from '@angular/http';
@Injectable()
export class CommonService {
  private loginUrl = 'iBlog/Authentication';
  private getWriteNoteUrl = 'iBlog/getWriteNote';
  private getTestUrl = 'iBlog/Test';
  private addUserInfoUrl = 'iBlog/AddUserInfo';
  constructor(private http: Http) { }

  /**
   * 登陆接口
   */
  getLogin(request) {
    return sendRequest(this.loginUrl, this.http, request);
  }
  /**
   * 获取WriteNote接口信息
   */
  getWriteNote(request) {
    return sendRequest(this.getWriteNoteUrl, this.http, request);
  }
  /**
   * 添加用户接口
   */
  addUserInfo(request) {
    return sendRequest(this.addUserInfoUrl, this.http, request);
  }
  /**
   * 测试接口GET请求
   */
  getTest(request) {
    return sendGetRequest(this.getTestUrl, this.http);
  }
}
