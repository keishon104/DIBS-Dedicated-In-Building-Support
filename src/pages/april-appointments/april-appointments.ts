import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

/*
  Generated class for the AprilAppointments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-april-appointments',
  templateUrl: 'april-appointments.html'
})
export class AprilAppointmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprilAppointmentsPage');
  }

  ConfirmPage(){
    this.navCtrl.push(CheckoutPage);
  }

}
