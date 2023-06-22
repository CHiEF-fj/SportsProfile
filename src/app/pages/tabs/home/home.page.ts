import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import Swiper from 'swiper';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  addProfile = [{
    firstName : 'Tom',
    lastName: 'Brady',
    dateOfBirth: '01/07/1999',
    position: 'Quaterback',
    totalWins: '43',
    totalMatch: '47',
    jerseyNo: '15',
    club: 'Bulls'
  },
  {
    firstName : 'Emosi',
    lastName: 'Bai',
    dateOfBirth: '07/01/1999',
    position: 'fullback',
    totalWins: '22',
    totalMatch: '44',
    jerseyNo: '11',
    club: 'SeaSide'
  },
  {
    firstName : 'Ken',
    lastName: 'Ken',
    dateOfBirth: '07/02/1999',
    position: 'wing',
    totalWins: '34',
    totalMatch: '14',
    club: 'Titans'
  },  
  ]

  today: number = Date.now()
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  

  images = [
    '../assets/1.jpg',
    '../assets/11.jpg',
    '../assets/12.jpg',
    '../assets/13.jpg',
  ];
  
  constructor() {}

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext(){
    this.swiper?.slideNext();
  }

  goPrev(){
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any){
    console.log('change: ',e);
  }


  ngOnInit() {

  }

}
