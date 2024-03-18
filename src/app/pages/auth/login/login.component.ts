import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  providers: [LoginServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoading: boolean = false;
  constructor(private service: LoginServiceService, private router: Router) {}
  onSubmit() {
    const payload = {};
    this.isLoading = true;

    this.service.userLogin(payload).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/']);
      this.isLoading = false;
    });
  }
}
