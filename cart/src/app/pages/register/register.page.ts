import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/shared/user.class';

import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;

  user: User= new User;
  userUid:String="";

  constructor(private modalCtl:ModalController, public formBuilder: FormBuilder,public alertController: AlertController,private navControler:NavController) { 
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')
      ])],
      nombre:['', Validators.compose([
        Validators.required,
      ])],
      apellido:['', Validators.compose([
        Validators.required,
      ])],
      celular:['', Validators.compose([
        Validators.required,
      ])],
      fechanacimiento:['', Validators.compose([
        Validators.required,
      ])]
  });
  }

  ngOnInit() {
  }


  onRegisterIn() {
    console.log(this.registerForm.valid);
    if(!this.registerForm.valid){
      this.presentAlert();
    }
    else{
      console.log("entraste"+this.user.email+this.user.password);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta de Formulario',
      message: 'Ingrese Datos Correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  async abrirCalendario(){
    const modal = await this.modalCtl.create({
      component: CalendarPage,
    componentProps: {
      nombre:'stalin',
      pais:'ecuador'
    }
    });
    await modal.present();

    const {data}:any =await modal.onDidDismiss();
    console.log("retorno de dataCalendario: ");
    console.log(data.fecha);
  }

}
