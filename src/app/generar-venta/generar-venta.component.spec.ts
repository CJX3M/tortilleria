import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarVentaComponent } from './generar-venta.component';

describe('GenerarVentaComponent', () => {
  let component: GenerarVentaComponent;
  let fixture: ComponentFixture<GenerarVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
