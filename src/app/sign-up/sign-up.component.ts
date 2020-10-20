import { AuthService} from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User} from '../models/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSignUp(form: NgForm ){
    let userData: User = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    };

    this.authService.signUp(userData).subscribe(responseData => {
      //Redirect user to main page!
    });
  }

}
