
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth.sign-up-response.model';

interface AuthInputData {
  email: string;
  password: string;
  returnSecureToken: boolean;
  displayName: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userUrl = 'https://myblog-ca85e.firebaseio.com/users/';
  private API_KEY = 'AIzaSyDywqYul1wpcAZiz52KIAtwigvs-XXcNLE';
  private signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;
  private signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;
  

  constructor(private http: HttpClient) { }

  signIn(user: User){
    return this.http.post(this.signInUrl, user);
  }

  signUp(user: User){

    let inputData: AuthInputData = {
     email: user.email,
     password: user.password,
     returnSecureToken: true,
     displayName: user.name
    };

    return this.http.post<AuthResponse>(this.signUpUrl, inputData);
  }

}
