import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";

import {CanvasPage} from "../pages/canvas/canvas";
import {PicturePage} from "../pages/picture/picture";
import{RegisterPage} from "../pages/register/register";

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gotohome(Page){
    this.nav.setRoot(HomePage);
  }
  signup(){
    this.nav.setRoot(RegisterPage);
  }
  Canvas(){
    this.nav.setRoot(CanvasPage);
  }
  Collage(){
    this.nav.setRoot(PicturePage);
  }
}
