import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLongdescriptionComponent } from './course-longdescription.component';

describe('CourseLongdescriptionComponent', () => {
  let component: CourseLongdescriptionComponent;
  let fixture: ComponentFixture<CourseLongdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseLongdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLongdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
