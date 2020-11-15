import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { FavCharacters } from 'src/app/models/fav-characters';
import { AuthService } from 'src/app/services/auth.service';
import { FavService } from 'src/app/services/fav.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated = false;
  user: User = null;

  constructor(
    private authService: AuthService,
    private favService: FavService,
    ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser(): void{
    this.authService.getCurrentUser().subscribe(response => {
      if(response){
        this.isAuthenticated = true;
        this.user = response;
       
        return;
      }
      this.isAuthenticated = false;
      this.user = null;
    });
  }

}
