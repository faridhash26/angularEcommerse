import { Component, Input } from '@angular/core';
import { DashboardLayoutComponentsService } from '../dashboard-layout-components.service';

@Component({
  selector: 'dashboard-app-layout-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public sidebarService: DashboardLayoutComponentsService) {}
}
