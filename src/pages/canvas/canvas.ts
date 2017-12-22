import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storage } from 'firebase';
import { Camera,CameraOptions } from '@ionic-native/camera';
import {PicturePage} from "../picture/picture";
import {Frame1Page} from "../frame1/frame1";
import {Frame2Page} from "../frame2/frame2";
import {Frame3Page} from "../frame3/frame3";
import {Frame4Page} from "../frame4/frame4";


@IonicPage()
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})
export class CanvasPage {

  constructor(private camera:Camera, public navCtrl: NavController, public navParams: NavParams) {
    //initializeApp(FIREBASE_CONFIG);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanvasPage');
  }
  async takePhoto(){
    try{
      const options : CameraOptions ={
        quality : 50,
        targetHeight : 600,
        targetWidth : 600,
        destinationType :   this.camera.DestinationType.DATA_URL,
        encodingType : this.camera.EncodingType.JPEG,
        mediaType : this.camera.MediaType.PICTURE,
        correctOrientation : true
      }

      const result = await this.camera.getPicture(options);
      const image =`data:image/jpeg;base64,${result}`;
      const pictures = storage().ref('pictures/myPhoto') ;
      pictures.putString(image,`data_url`);
    }
    catch(e){
      console.error(e);
    }
  }
  onNext(){
    this.navCtrl.push(PicturePage);
  }
  framePage1(){
    this.navCtrl.push(Frame1Page);
  }
  framePage2(){
    this.navCtrl.push(Frame2Page);
  }
  framePage3(){
    this.navCtrl.push(Frame3Page);
  }
  framePage4(){
    this.navCtrl.push(Frame4Page);
  }
}
