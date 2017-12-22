import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {
  selectedItem: any;
  images: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController
  ) {
    this.selectedItem = navParams.get('item');
    //this.images = ['thumbnail-kitten-1.jpg','thumbnail-kitten-2.jpg','thumbnail-kitten-3.jpg','thumbnail-kitten-4.jpg','thumbnail-puppy-1.jpg','thumbnail-puppy-2.jpg','thumbnail-puppy-3.jpg','thumbnail-puppy-4.jpg'];
    this.images = ['pic21.jpg', 'pic22.jpg', 'pic23.jpg', 'pic24.jpg','pic18.jpg','pic21.jpg','pic20.png','pic21.jpg','pic22.jpg','pic23.jpg','pic24.jpg','pic21.jpg','pic22.jpg'];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }
  onclick(){
    let alert = this.alertCtrl.create({
      title: "Login",
      message:"please Login to Download",
      buttons:[
        {
          text: 'Login',
          role: 'Login',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        },
        {
          text: 'Cancle',
          role: 'Cancle',
        }]
    });
    alert.present();
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

}
