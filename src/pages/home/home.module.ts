import { NgModule } from '@angular/core';
import { IonicPage, IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


@IonicPage()
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
