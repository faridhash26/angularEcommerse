import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../services/auth-service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) =>
  inject(AuthServiceService).canActivate(route, state);
