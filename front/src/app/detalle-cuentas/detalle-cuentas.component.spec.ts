import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuentasComponent } from './detalle-cuentas.component';

describe('DetalleCuentasComponent', () => {
  let component: DetalleCuentasComponent;
  let fixture: ComponentFixture<DetalleCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
