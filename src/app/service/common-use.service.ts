import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonUseService {
  httpOptions = new HttpHeaders();
  apiUrl = 'http://localhost:8081/question/';
  constructor(private http: HttpClient) { }

  post (url,data) {
    this.httpOptions['headers'].set('Access-Control-Allow-Origin','*',);
    return this.http.post(url, data)
  }
  get (url) {
    return this.http.get(url)
  }
}
