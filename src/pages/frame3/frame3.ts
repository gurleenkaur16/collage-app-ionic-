import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {Camera, CameraOptions} from "@ionic-native/camera";
import {storage} from "firebase";
/**
 * Generated class for the Frame3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frame3',
  templateUrl: 'frame3.html',
})
export class Frame3Page {

  constructor(private camera:Camera,public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Frame3Page');
  }
  async openCamera(){
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

  openFolder(){

  }
  picAction(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Picture',
      buttons: [
        {
          text: 'Camera',
          icon:'camera',
          role: 'Camera',
          handler: () => {
            this.openCamera();
          }
        },
        {
          text: 'Upload Image',
          role:'Upload Image',
          icon:'images',
          handler: () => {
            this.openFolder();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
