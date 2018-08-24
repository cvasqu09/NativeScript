import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(): Observable<any> {
    let headers = this.requestHeaders();
    return this.httpClient.post(`${BACKEND_ENDPOINT}/login`,
      {
        "email": "chrisv6@gmail.com",
        "password": "potat"
      }
    )
  }

  private requestHeaders() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return headers;
  }

}
