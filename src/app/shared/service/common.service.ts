import { Injectable } from '@angular/core';
import { sendRequest, sendGetRequest } from '../interface-Api';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class CommonService {
  private loginUrl = 'iBlog/Authentication';
  private getWriteNoteUrl = 'iBlog/getWriteNote';
  private getTestUrl = 'iBlog/Test';
  private addUserInfoUrl = 'iBlog/AddUserInfo';
  private getParams: any;
  constructor(
    private http: Http,
    private Router: Router,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.getParams = this.activatedRoute.snapshot.params;
  }

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
  /**
  * 跳转页面
  */
  getTurnPage() {
    return this.getParams;
  }

  setTurnPage(path: string, params?: {}) {
    this.getParams = params;
    this.router.navigate([path], { skipLocationChange: true });
  }
}
