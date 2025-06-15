import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginCardComponent } from './admin-login-card.component';

describe('AdminLoginCardComponent', () => {
  let component: AdminLoginCardComponent;
  let fixture: ComponentFixture<AdminLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLoginCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
