import { Http, Headers, RequestOptions } from '@angular/http';
import { Config } from './config';
import 'rxjs/Rx';

export function sendRequest(url: string, http?: Http, request?: any) {
    const URL = Config.url + url;
    const body = request ? JSON.stringify(request) : {};
    const headers = new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    const options = new RequestOptions({ headers: headers });

    return http.post(URL, body, options)
        .map(res => {
            return res.json();
        }).toPromise().then(resp => {
            if (resp.retcode === 0) {
                return Promise.resolve(resp);
            } else {
                return Promise.reject(resp);
            }
        });

}
