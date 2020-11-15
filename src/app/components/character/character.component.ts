import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Character } from 'src/app/models/character';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {

  @Input () character: Character;

  isAuthenticated = false;
  user: User = null;

  constructor(private authService: AuthService) { 
    
  }

  ngOnInit(): void {

    this.getCurrentUser();

    
    
    console.log(this.isAuthenticated)
    
   
  }
  getCurrentUser(): void{
    this.authService.getCurrentUser().subscribe(response => {
      if(response){
        console.log("angular me tiene loco")
        this.isAuthenticated = true;
        this.user = response;
       
        return;
      }
      this.isAuthenticated = false;
      this.user = null;
    });
  }

}
