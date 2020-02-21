import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
   
  constructor(public router: Router, public formBuilder: FormBuilder) { 
    
    
    /*this.loginForm=this.formBuilder.group({
      password:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')
      ])),
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.email
      ]))
    });*/

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')
      ])]
  });
  }
  onSignIn() {
    console.log('what is goin on');
    console.log(this.loginForm.valid);
    //this.router.navigateByUrl('/register');
}


  ngOnInit() {
  }

}
