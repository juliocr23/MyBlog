import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link = 'https://myblog-ca85e.firebaseio.com/users.json';

  constructor(private http: HttpClient) { }

  signIn(user: User){
    return this.http.post(this.link, user);
  }

  signUp(user: User){
    
  }


}
