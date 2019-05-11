import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsDiaryAddComponent } from './user-meals-diary-add.component';

describe('UserMealsDiaryAddComponent', () => {
  let component: UserMealsDiaryAddComponent;
  let fixture: ComponentFixture<UserMealsDiaryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsDiaryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsDiaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
