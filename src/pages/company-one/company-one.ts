import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { TrendingPage } from '../trending/trending';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';



/*
  Generated class for the CompanyOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-company-one',
  templateUrl: 'company-one.html'
})
export class CompanyOnePage {
  pet: string = "portfolio";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyOnePage');
  }

  nextPage(){
    this.navCtrl.push(CategoryPage);
  }
  trendingPage(){
    this.navCtrl.push(TrendingPage);
  }
  profilePage(){
    this.navCtrl.push(ProfilePage);
  }
  homePage(){
    this.navCtrl.push(HomePage);
  }
  addApt(){
    this.navCtrl.push(CalendarPage);
  }



}
