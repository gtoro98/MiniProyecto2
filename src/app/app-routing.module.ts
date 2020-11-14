import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
