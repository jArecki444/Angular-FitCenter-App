import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExercisesDeleteComponent } from './user-exercises-delete.component';

describe('UserExercisesDeleteComponent', () => {
  let component: UserExercisesDeleteComponent;
  let fixture: ComponentFixture<UserExercisesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExercisesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExercisesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
