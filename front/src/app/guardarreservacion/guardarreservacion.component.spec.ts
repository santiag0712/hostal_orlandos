import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarreservacionComponent } from './guardarreservacion.component';

describe('GuardarreservacionComponent', () => {
  let component: GuardarreservacionComponent;
  let fixture: ComponentFixture<GuardarreservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarreservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarreservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
