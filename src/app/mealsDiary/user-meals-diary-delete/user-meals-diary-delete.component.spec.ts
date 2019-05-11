import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsDiaryDeleteComponent } from './user-meals-diary-delete.component';

describe('UserMealsDiaryDeleteComponent', () => {
  let component: UserMealsDiaryDeleteComponent;
  let fixture: ComponentFixture<UserMealsDiaryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsDiaryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealsDiaryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
