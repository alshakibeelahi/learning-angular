import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstudentDetailsComponent } from './showstudent-details.component';

describe('ShowstudentDetailsComponent', () => {
  let component: ShowstudentDetailsComponent;
  let fixture: ComponentFixture<ShowstudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowstudentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowstudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
