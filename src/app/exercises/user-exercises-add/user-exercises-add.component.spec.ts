import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesAddComponent } from './user-exercises-add.component';

describe('UserExercisesAddComponent', () => {
  let component: UserExercisesAddComponent;
  let fixture: ComponentFixture<UserExercisesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
