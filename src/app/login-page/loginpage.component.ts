import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {
    isUserExist = true;
    isError = false;
    errorMessage:string;
    credentails: Credential[];
    loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ){}

    public verify(){
        // write logic to verify cred
    }

    public signin(){
        this.router.navigateByUrl('signup');
    }
}
