import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CanvasPage} from "../canvas/canvas";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from '../../modules/user';
import {RegisterPage} from "../register/register";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user ={} as User;
  //public loginForm:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fire:AngularFireAuth) {
  }

  async gosignin(user) {
    try{
      const  out = await this.fire.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(out);
      if(out){
        this.navCtrl.push(CanvasPage);
      }
    }
    catch (error){
      console.log(error);
    }

  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }



}
