import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Screenshot } from '@ionic-native/screenshot';



import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {CanvasPage} from "../pages/canvas/canvas";
import {PicturePage} from "../pages/picture/picture";
import {RegisterPage} from "../pages/register/register";

const firebaseAuth = {

  apiKey: "AIzaSyDV_WQrC28ZyNJJN8vySP0_V8M4_eX3PkY",
  authDomain: "my-first-app-a6f75.firebaseapp.com",
  databaseURL: "https://my-first-app-a6f75.firebaseio.com",
  projectId: "my-first-app-a6f75",
  storageBucket: "my-first-app-a6f75.appspot.com",
  messagingSenderId: "538020223068"

};

import{AngularFireAuthModule} from "angularfire2/auth";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {LoginPage} from "../pages/login/login";
import  {Camera} from "@ionic-native/camera";
import {FIREBASE_CONFIG} from "./firebase.config";
import {AngularFireModule} from "angularfire2";
import {from} from "rxjs/observable/from";
import {Frame1Page} from "../pages/frame1/frame1";
import {Frame2Page} from "../pages/frame2/frame2";
import {Frame3Page} from "../pages/frame3/frame3";
import {Frame4Page} from "../pages/frame4/frame4";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CanvasPage,
    PicturePage,
    RegisterPage,
    LoginPage,
    Frame1Page,
    Frame2Page,
    Frame3Page,
    Frame4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CanvasPage,
    PicturePage,
    RegisterPage,
    LoginPage,
    Frame1Page,
    Frame2Page,
    Frame3Page,
    Frame4Page
  ],
  providers: [
    StatusBar,
    Camera,
    Screenshot,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileOpener
  ]
})
export class AppModule {}
