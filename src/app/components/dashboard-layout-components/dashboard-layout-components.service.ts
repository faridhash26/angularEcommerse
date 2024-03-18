import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardLayoutComponentsService {
  isSidebarOpened: Boolean = true;
  toggleSidebar(): void {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
