import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsDiaryEditComponent } from './user-meals-diary-edit.component';

describe('UserMealsDiaryEditComponent', () => {
  let component: UserMealsDiaryEditComponent;
  let fixture: ComponentFixture<UserMealsDiaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsDiaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsDiaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
