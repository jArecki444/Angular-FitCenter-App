import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsEditComponent } from './user-meals-edit.component';

describe('UserMealsEditComponent', () => {
  let component: UserMealsEditComponent;
  let fixture: ComponentFixture<UserMealsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
