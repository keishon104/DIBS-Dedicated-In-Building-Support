import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  doPrompt() {
     let prompt = this.alertCtrl.create({
       title: 'Welcome back Shantazia!',
       message: "please re-enter your password",
       inputs: [
         {
           name: 'title',
           placeholder: 'password'
         },
       ],
       buttons: [
         {
           text: 'Cancel',
           handler: data => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'Confirm',
           handler: data => {
             console.log('Saved clicked');
           }
         }
       ]
     });
     prompt.present();
   }


}
