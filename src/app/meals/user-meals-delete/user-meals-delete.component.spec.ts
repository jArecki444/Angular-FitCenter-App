import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsDeleteComponent } from './user-meals-delete.component';

describe('UserMealsDeleteComponent', () => {
  let component: UserMealsDeleteComponent;
  let fixture: ComponentFixture<UserMealsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
