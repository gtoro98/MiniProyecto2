import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharacterListComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
