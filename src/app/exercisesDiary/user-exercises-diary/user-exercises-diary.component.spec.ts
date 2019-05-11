import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesDiaryComponent } from './user-exercises-diary.component';

describe('UserExercisesDiaryComponent', () => {
  let component: UserExercisesDiaryComponent;
  let fixture: ComponentFixture<UserExercisesDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
