import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesDiaryEditComponent } from './user-exercises-diary-edit.component';

describe('UserExercisesDiaryEditComponent', () => {
  let component: UserExercisesDiaryEditComponent;
  let fixture: ComponentFixture<UserExercisesDiaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesDiaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesDiaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
