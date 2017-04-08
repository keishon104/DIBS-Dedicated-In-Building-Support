import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { ProfilePage } from '../profile/profile';
import { ProductsPage } from '../products/products';


/*
  Generated class for the Trending page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html'
})
export class TrendingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingPage');
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
  companyPage(){
    this.navCtrl.push(ProductsPage);
  }


}
