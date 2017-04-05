import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { TrendingPage } from '../trending/trending';
import { ProfilePage } from '../profile/profile';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
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


}
