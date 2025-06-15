import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBreadcumbComponent } from './main-content-breadcumb.component';

describe('MainContentBreadcumbComponent', () => {
  let component: MainContentBreadcumbComponent;
  let fixture: ComponentFixture<MainContentBreadcumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentBreadcumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentBreadcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
