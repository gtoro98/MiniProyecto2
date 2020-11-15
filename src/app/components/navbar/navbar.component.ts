import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;
  user: User = null;

  constructor(private authService: AuthService) { }

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

  logInWithGoogle(): void {
    this.authService.loginWithGoogle().then((response) => { 
    
  })
}
}