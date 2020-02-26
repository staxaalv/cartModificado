import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { CalendarPage } from '../calendar/calendar.page';
import { CalendarPageModule } from '../calendar/calendar.module';

@NgModule({
  entryComponents:[CalendarPage],
  imports: [
    CalendarPageModule,
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
