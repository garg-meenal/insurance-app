import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    this.loginService.verifyUser(username, password).subscribe({
      next: (user) => {
        if (user) {
          this.loginError = null;
          this.router.navigate(['/policy']);
          this.loginService.updateIsUserLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          this.loginError = 'Invalid username or password';
          this.loginService.updateIsUserLoggedIn(false);
        }
      },
      error: () => {
        this.loginError = 'Error occurred while verifying user.';
        this.loginService.updateIsUserLoggedIn(false);
      }
    });
  }
}
