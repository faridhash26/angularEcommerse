import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedService {
  constructor(private router: Router) {}
  isLoggedIn: boolean = false;

  checkIslogedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return (this.isLoggedIn = true);
    } else {
      return (this.isLoggedIn = false);
    }
  }
  loggingOut() {
    console.log('dfdf');
    localStorage.clear();
    this.router.navigate([this.getLoginUrl()]);
  }
  private getLoginUrl() {
    return '/signin';
  }
}
