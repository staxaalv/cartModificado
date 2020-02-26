import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/shared/user.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  
  user: User= new User;
  userUid:String="";
   
  constructor(public router: Router, public formBuilder: FormBuilder,public alertController: AlertController,private navControler:NavController) { 
    
    
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
    console.log(this.loginForm.valid);
    if(!this.loginForm.valid){
      this.presentAlert();
    }
    else{
      console.log("entraste"+this.user.email+this.user.password);
    }
  }


  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta de Formulario',
      message: 'Ingrese Datos Correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }
  goRegister(){
    this.navControler.navigateForward("/register");
  }

}
