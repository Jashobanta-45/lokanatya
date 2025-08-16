import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Register {
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Observable for components to subscribe
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {
    // restore state from localStorage
    const saved = localStorage.getItem('isLoggedIn');
    this.loggedIn.next(saved === 'true');
  }

  login(userPhone: string) {
    localStorage.setItem('userPhone', userPhone);
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('userPhone');
    localStorage.setItem('isLoggedIn', 'false');
    this.loggedIn.next(false);
  }
}
