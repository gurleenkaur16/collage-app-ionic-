import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {FormBuilder,Validators} from "@angular/common";
import {HomePage} from "../home/home";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from '../../modules/user';
import {CanvasPage} from "../canvas/canvas";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user ={} as User;
  public registrationForm:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fire:AngularFireAuth) {

  }

   gosignup(user){
    this.navCtrl.push(CanvasPage);
    //try{
    //const result=await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);

    this.fire.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then (data => {

        console.log('got data '+data);
      })
      .catch (error =>{
      console.log('got an error'+ error);
    });
    console.log('would register user with', user.email, user.password);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
