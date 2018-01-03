import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import { FirebaseApp } from '@firebase/app-types';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ContactProvider } from '../providers/contact/contact';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SmsProvider } from '../providers/sms/sms';





@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAOsX97iSLa5a1NcLyv59hEFnDm7oWToG8",
      authDomain: "example-ionic-rj.firebaseapp.com",
      databaseURL: "https://example-ionic-rj.firebaseio.com",
      projectId: "example-ionic-rj",
      storageBucket: "example-ionic-rj.appspot.com",
      messagingSenderId: "865802278736"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactProvider,
    SmsProvider
  ]
})
export class AppModule { }
