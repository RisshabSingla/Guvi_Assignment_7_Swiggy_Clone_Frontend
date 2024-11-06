import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true; 
  email: string = '';
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onLoginSubmit() {
    if (this.email === 'test@example.com' && this.password === 'password') {
      this.router.navigate(['/order']);
    } else {
      this.error = 'Invalid email or password';
    }
  }

  onRegisterSubmit() {
    if (this.email && this.username && this.password) {
      console.log('User registered:', { email: this.email, username: this.username, password: this.password });
      this.router.navigate(['/order']);
    } else {
      this.error = 'All fields are required!';
    }
  }
}
