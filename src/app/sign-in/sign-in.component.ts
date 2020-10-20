import { NgForm } from '@angular/forms';
import { AuthService } from './../sign-up/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){

    const user: User = {
      email: form.value.email,
      password: form.value.password
    };

    this.authService.signIn(user).subscribe(responseData => {
        console.log(responseData);
    });
  }

}
