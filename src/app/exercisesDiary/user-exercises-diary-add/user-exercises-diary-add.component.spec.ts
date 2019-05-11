import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesDiaryAddComponent } from './user-exercises-diary-add.component';

describe('UserExercisesDiaryAddComponent', () => {
  let component: UserExercisesDiaryAddComponent;
  let fixture: ComponentFixture<UserExercisesDiaryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesDiaryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesDiaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
