import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NotesService } from '../service/notes.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DetailPage} from '../pages/detail/detail';

export const firebaseConfig = {
  apiKey: "AIzaSyDUL2QFyMwFY-jpSnjgGlMjcmMJVUMnl1U",
  authDomain: "notionic-fb934.firebaseapp.com",
  databaseURL: "https://notionic-fb934.firebaseio.com",
  storageBucket: "notionic-fb934.appspot.com",
  messagingSenderId: "874224762904"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService
  ]
})
export class AppModule {}
