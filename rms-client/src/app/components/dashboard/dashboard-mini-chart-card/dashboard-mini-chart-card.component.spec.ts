import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMiniChartCardComponent } from './dashboard-mini-chart-card.component';

describe('DashboardMiniChartCardComponent', () => {
  let component: DashboardMiniChartCardComponent;
  let fixture: ComponentFixture<DashboardMiniChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMiniChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMiniChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
