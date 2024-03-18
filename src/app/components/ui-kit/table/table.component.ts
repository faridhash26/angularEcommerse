import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ITheaderItem extends Record<string, string | number> {
  id: number;
  label: string;
  value: string;
}
@Component({
  selector: 'custom-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input({ required: true }) theaderItems!: Array<ITheaderItem>;
  @Input({ required: true }) tableData!: Array<Record<string, string | number>>;
}
