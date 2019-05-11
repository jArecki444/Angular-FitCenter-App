import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsAddComponent } from './user-meals-add.component';

describe('UserMealsAddComponent', () => {
  let component: UserMealsAddComponent;
  let fixture: ComponentFixture<UserMealsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
