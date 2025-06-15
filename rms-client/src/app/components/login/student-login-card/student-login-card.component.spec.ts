import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginCardComponent } from './student-login-card.component';

describe('StudentLoginCardComponent', () => {
  let component: StudentLoginCardComponent;
  let fixture: ComponentFixture<StudentLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLoginCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
