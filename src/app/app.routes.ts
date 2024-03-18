import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardHomePageComponent } from './pages/dashboard-pages/dashboard-home-page/dashboard-home-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/main-pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ContactUsComponent } from './pages/main-pages/contact-us/contact-us.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // main Routes
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: LoginComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
  // dashboard
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [{ path: 'home', component: DashboardHomePageComponent }],
  },
];
