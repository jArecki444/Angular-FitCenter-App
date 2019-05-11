import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsEditComponent } from './user-products-edit.component';

describe('UserProductsEditComponent', () => {
  let component: UserProductsEditComponent;
  let fixture: ComponentFixture<UserProductsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
