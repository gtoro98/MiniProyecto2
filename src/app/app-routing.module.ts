import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { FavCharactersComponent } from './pages/fav-characters/fav-characters.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full',
  },
  {
    path: 'character-list',
    component: HomeComponent,

  },
  {
    path: 'character-details/:id',
    component: CharacterDetailsComponent,

  },
  {
    path: 'favCharacters/:userId',
    component: FavCharactersComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
