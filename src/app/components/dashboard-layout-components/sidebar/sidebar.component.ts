import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardLayoutComponentsService } from '../dashboard-layout-components.service';

@Component({
  selector: 'dashboard-app-layout-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public sidebarService: DashboardLayoutComponentsService) {}
}
