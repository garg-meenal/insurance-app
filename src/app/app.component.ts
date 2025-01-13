import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'insurance-app';
  isUserLoggedIn = false;
  
  ngOnInit(): void {
    const isLoggedIn = !!localStorage.getItem('user');
    if (isLoggedIn) {
      this.isUserLoggedIn = true;
    }
  }

}
