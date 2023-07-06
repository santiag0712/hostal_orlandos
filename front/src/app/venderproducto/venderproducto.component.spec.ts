import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderproductoComponent } from './venderproducto.component';

describe('VenderproductoComponent', () => {
  let component: VenderproductoComponent;
  let fixture: ComponentFixture<VenderproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
