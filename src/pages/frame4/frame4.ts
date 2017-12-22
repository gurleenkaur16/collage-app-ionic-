import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {Camera, CameraOptions} from "@ionic-native/camera";
import {storage} from "firebase";
import { Screenshot } from '@ionic-native/screenshot';
/**
 * Generated class for the Frame4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frame4',
  templateUrl: 'frame4.html',
})
export class Frame4Page {
  screen: any;
  state: boolean = false;

  constructor(private camera:Camera,public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,private screenshot: Screenshot) {
  }
  reset() {
    var self = this;
    setTimeout(function(){
      self.state = false;
    }, 6000);
  }

  screenShot() {
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg') .then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }
  screenShotURI() {
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Frame4Page');
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

      const result = await this.camera.getPicture(options)
      const image =`data:image/jpeg;base64,${result}`;
      //  const pictures = storage().ref('pictures/myPhoto') ;
      // pictures.putString(image,`data_url`);
      this.base64Image=image;
    }
    catch(e){
      console.error(e);
    }
  }
  public base64Image: string;
  openFolder(){
    var  i=0;
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth:1000,
      targetHeight:1000,
      sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData)=>{

      this.base64Image='data:image/jpeg;base64,' +imageData;
      console.log(imageData)
    },(err)=>{
      console.log(err);});
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
