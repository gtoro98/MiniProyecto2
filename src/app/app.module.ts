import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterComponent } from './components/character/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharacterListComponent,
    FormSearchComponent,
    CharacterDetailsComponent,
    CharacterComponent,

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    HttpClientModule,
    InfiniteScrollModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
