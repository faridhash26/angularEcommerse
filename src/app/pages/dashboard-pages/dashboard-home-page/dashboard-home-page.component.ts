import { Component } from '@angular/core';
import { TableComponent } from '../../../components/ui-kit/table/table.component';

interface ITheaderItem extends Record<string, string | number> {
  id: number;
  label: string;
  value: string;
}
@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent {
  theaderItems: Array<ITheaderItem> = [
    { id: 1, label: 'name', value: 'name' },
    { id: 2, label: 'age', value: 'age' },
    { id: 3, label: 'role', value: 'role' },
    { id: 4, label: 'state', value: 'state' },
    { id: 5, label: 'salary', value: 'salary' },
  ];
  tableData: Array<Record<string, string | number>> = [
    {
      name: 'farid',
      age: 26,
      role: 'writer',
      state: 'tehran',
      salary: 5000,
    },
    {
      name: 'sajad',
      age: 45,
      role: 'admin',
      state: 'tehran',
      salary: 90000,
    },
    {
      name: 'mohsen',
      age: 32,
      role: 'tester',
      state: 'mashhad',
      salary: 3000,
    },
  ];
}
