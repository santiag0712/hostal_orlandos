import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarHabitacionesComponent } from './seleccionar-habitaciones.component';

describe('SeleccionarHabitacionesComponent', () => {
  let component: SeleccionarHabitacionesComponent;
  let fixture: ComponentFixture<SeleccionarHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
