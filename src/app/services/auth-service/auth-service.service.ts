import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate([this.getLoginUrl()]);
      return false;
    }
  }
  isUserLoggedIn() {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      return true;
    } else {
      return false;
    }
  }
  getLoginUrl() {
    return '/signin';
  }
}
