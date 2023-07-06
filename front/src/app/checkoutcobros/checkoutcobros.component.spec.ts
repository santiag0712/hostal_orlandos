import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutcobrosComponent } from './checkoutcobros.component';

describe('CheckoutcobrosComponent', () => {
  let component: CheckoutcobrosComponent;
  let fixture: ComponentFixture<CheckoutcobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutcobrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutcobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
