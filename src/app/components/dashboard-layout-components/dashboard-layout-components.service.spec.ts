import { TestBed } from '@angular/core/testing';

import { DashboardLayoutComponentsService } from './dashboard-layout-components.service';

describe('DashboardLayoutComponentsService', () => {
  let service: DashboardLayoutComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardLayoutComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
