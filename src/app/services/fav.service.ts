import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';
import { FavCharacters } from '../models/fav-characters';
import { CharacterService } from './character.service';


@Injectable({
  providedIn: 'root'
})
export class FavService {

  private favCollection: AngularFirestoreCollection<FavCharacters>;

  constructor(
    private db: AngularFirestore,
    private characterService: CharacterService
    ) {
    this.favCollection = this.db.collection<FavCharacters>('productos');
  }

  getFavCharacters(userId: string){

    return this.favCollection.doc<FavCharacters>('userId').snapshotChanges();
  }

  addFavCharacter(favCharacters: FavCharacters): Promise<any>{
    return this.favCollection.add(favCharacters);
  }

}
