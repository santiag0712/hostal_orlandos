import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadministracionComponent } from './homeadministracion.component';

describe('HomeadministracionComponent', () => {
  let component: HomeadministracionComponent;
  let fixture: ComponentFixture<HomeadministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeadministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeadministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
