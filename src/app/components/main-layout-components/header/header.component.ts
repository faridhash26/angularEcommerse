import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticatedService } from '../../../services/authenticated-service/authenticated.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public authService: AuthenticatedService) {}
}
