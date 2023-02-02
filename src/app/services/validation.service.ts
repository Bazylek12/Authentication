import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({providedIn: 'root'})
export class ValidationService {
  constructor(private _httpClient: HttpClient) {
  }

  login(data: LoginModel): Observable<any> {
    return this._httpClient.post('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data);
  }
}
