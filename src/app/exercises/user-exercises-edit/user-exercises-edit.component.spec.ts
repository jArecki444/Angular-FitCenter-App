import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesEditComponent } from './user-exercises-edit.component';

describe('UserExercisesEditComponent', () => {
  let component: UserExercisesEditComponent;
  let fixture: ComponentFixture<UserExercisesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
