import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsDeleteComponent } from './user-products-delete.component';

describe('UserProductsDeleteComponent', () => {
  let component: UserProductsDeleteComponent;
  let fixture: ComponentFixture<UserProductsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
