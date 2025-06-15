import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentRankComponent } from './dashboard-student-rank.component';

describe('DashboardStudentRankComponent', () => {
  let component: DashboardStudentRankComponent;
  let fixture: ComponentFixture<DashboardStudentRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStudentRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStudentRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
