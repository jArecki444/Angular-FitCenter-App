import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsDiaryComponent } from './user-meals-diary.component';

describe('UserMealsDiaryComponent', () => {
  let component: UserMealsDiaryComponent;
  let fixture: ComponentFixture<UserMealsDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
