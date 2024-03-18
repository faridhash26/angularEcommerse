import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  userLogin(data: any): Observable<any> {
    console.log('http');
    return this.http.post(this.url + '/login', data);
  }
}
