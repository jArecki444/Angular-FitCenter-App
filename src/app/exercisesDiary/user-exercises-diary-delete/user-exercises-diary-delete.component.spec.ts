import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesDiaryDeleteComponent } from './user-exercises-diary-delete.component';

describe('UserExercisesDiaryDeleteComponent', () => {
  let component: UserExercisesDiaryDeleteComponent;
  let fixture: ComponentFixture<UserExercisesDiaryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesDiaryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesDiaryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
