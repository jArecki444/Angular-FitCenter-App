import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsAddComponent } from './user-products-add.component';

describe('UserProductsAddComponent', () => {
  let component: UserProductsAddComponent;
  let fixture: ComponentFixture<UserProductsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
