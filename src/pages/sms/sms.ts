import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SMS} from '@ionic-native/sms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  phoneNumber: Number;
  textMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {
  }

  homePage()
  {
    this.navCtrl.push('HomePage');
  }

  async sendTextMessage(){

    await SMS.prototype.send(String(this.phoneNumber),this.textMessage);
    const toast = this.toast.create({
      message: 'Mensagem enviada!',
      duration : 3000
    });
    toast.present();
    
    }
    catch (e) {
      const toast = this.toast.create({
        message: 'Erro ao enviar',
        duration : 3000
      });
      toast.present();
    }


  
  //ionViewDidLoad() {
   // console.log('ionViewDidLoad SmsPage');
  }

  

