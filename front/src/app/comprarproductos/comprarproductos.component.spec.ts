import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarproductosComponent } from './comprarproductos.component';

describe('ComprarproductosComponent', () => {
  let component: ComprarproductosComponent;
  let fixture: ComponentFixture<ComprarproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
