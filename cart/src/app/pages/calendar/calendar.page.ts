import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  viewTitle: string;
  selectedDay = new Date();
  fechaSelect:Date=this.selectedDay;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };


  constructor( private modalCtl:ModalController) { }

  ngOnInit() {
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
    console.log("MES y AÑO: "+this.viewTitle);
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    console.log(this.viewTitle);
  }

  onCurrentDataChanged(event:Date){
    this.fechaSelect=event;
    console.log("imprimiendo seleccion de fecha: "+ this.fechaSelect);
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    return date >= current;
  };


  salirSinArgumentos(){
    this.modalCtl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtl.dismiss({
      fecha:this.fechaSelect
    });
  }

}
