import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  email: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { email: 'test@example.com', username: 'testuser', password: 'password123' },
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<any> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user)); 
      this.router.navigate(['/order']);  
      return of({ success: true, user });
    } else {
      return of({ success: false, message: 'Invalid email or password' });
    }
  }

  register(email: string, username: string, password: string): Observable<any> {
    const existingUser = this.users.find(u => u.email === email);
    
    if (existingUser) {
      return of({ success: false, message: 'Email already exists' });
    } else {
      const newUser: User = { email, username, password };
      this.users.push(newUser);
      this.currentUserSubject.next(newUser); 
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      this.router.navigate(['/order']);  
      return of({ success: true, user: newUser });
    }
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser'); 
    this.router.navigate(['/login']);  
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
