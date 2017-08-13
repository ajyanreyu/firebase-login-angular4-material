import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyAXWLfKVCl4KBAufh-0vUzniYIj9nKN49g',
  authDomain: 'pruebalogin-9e7fb.firebaseapp.com',
  databaseURL: 'https://pruebalogin-9e7fb.firebaseio.com',
  projectId: 'pruebalogin-9e7fb',
  storageBucket: '',
  messagingSenderId: '411092143385'
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
