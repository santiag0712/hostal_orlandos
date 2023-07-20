import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarDepositoComponent } from './guardar-deposito.component';

describe('GuardarDepositoComponent', () => {
  let component: GuardarDepositoComponent;
  let fixture: ComponentFixture<GuardarDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
