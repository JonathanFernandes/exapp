import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Observable<any>;



  constructor(
    public navCtrl: NavController,
    private toast: ToastController,
    private provider: ContactProvider,
    public alertCtrl: AlertController,

  ) {

    this.contacts = this.provider.getAll();

  }

  sendMsg()
  {
    this.navCtrl.push('SmsPage');
  }

  addContact()
  {
    this.navCtrl.push('AddtechPage');
  }


  

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Deseja realmente remover este contato ?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    alert.present();
  }

  newContact() {
    this.navCtrl.push('ContactPage');
  }

 

  editContact(contact: any) {
    //maneira 1
    this.navCtrl.push('ContactPage', { contact: contact });

    //maneira 2
    //this.navCtrl.push('ContactPage', { key: contact.key});
  }

  removeContact(key: string) {
    this.provider.remove(key)

      .then(() => {
        this.toast.create({ message: 'Contato removido com sucesso.', duration: 3000 }).present();
      })

      .catch((e) => {
        this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();

      })

  }
}
