import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Character } from '../models/character';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterCollection: AngularFirestoreCollection<Character>;

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 1){
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number){
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`)
  }
}
