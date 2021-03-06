import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { TrendingPage } from '../trending/trending';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { CompanyOnePage } from '../company-one/company-one';



/*
  Generated class for the Products page.
d
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
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
    this.navCtrl.push(CompanyOnePage);
  }

}
