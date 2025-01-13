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
  isLoginSuccess = false;
  isUserLoggedIn = false;
  
  constructor(private readonly loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.isUserLoggedIn$.subscribe((flag)=>{
      this.isLoginSuccess = flag;
    });
    const isLoggedIn = !!localStorage.getItem('user');
    if (isLoggedIn) {
      this.isUserLoggedIn = true;
    }
  }

}
