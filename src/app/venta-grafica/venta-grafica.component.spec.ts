import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaGraficaComponent } from './venta-grafica.component';

describe('VentaGraficaComponent', () => {
  let component: VentaGraficaComponent;
  let fixture: ComponentFixture<VentaGraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaGraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
