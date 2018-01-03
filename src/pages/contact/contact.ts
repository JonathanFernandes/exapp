import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactProvider } from '../../providers/contact/contact';



@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  title: string;
  form: FormGroup;
  contact: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private FormBuilder: FormBuilder,
    private provider: ContactProvider,
    private toast: ToastController
  ) {
    // maneira 1 de editar um contato
    this.contact = this.navParams.data.contact || {};
    this.createForm();

    //maneira 2 de editar um contato
    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando contato' : ' Novo contato';
  }

  createForm() {
    this.form = this.FormBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      tel: [this.contact.tel, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(()=>{
        this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((e)=>{
        this.toast.create({ message: ' Erro ao salvar o contato.', duration: 3000}).present();
        console.error(e);
      })
    }
  }
}







  //ionViewDidLoad() {
  //console.log('ionViewDidLoad ContactPage');
