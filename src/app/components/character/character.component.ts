import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Character } from 'src/app/models/character';
import { FavCharacters } from 'src/app/models/fav-characters';
import { AuthService } from 'src/app/services/auth.service';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {

  @Input () character: Character;


  @Input() isAuthenticated = false;
  @Input()user: User = null;

  private editarFav: FavCharacters = null;

  constructor(
    private authService: AuthService,
    private favService: FavService,
    private router: Router,
    ) { 
    
  }

  ngOnInit(): void {

    console.log(this.isAuthenticated)
    
  }

  
  addFav(favId: number){

    this.favService.getFavCharacters(this.user.displayName).subscribe((item) => {
      const favCharacters2: FavCharacters = item.payload.data('userId')
       
      
      
      console.log("Item Payload:",favCharacters2)
      
      
        
      
    })

    
    const favCharacters: FavCharacters ={
      userId: this.user.displayName,
      favorites: [favId],
    }
    console.log('favCharacters: ', favCharacters)
    this.favService.addFavCharacter(favCharacters).then(res => {
      this.router.navigate(['/']),
      console.log("Producto editado")
    })
    
  }

}
