import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent implements OnInit {

  @Input() venta: Venta = {
    id: '0',
    objeto: '',
    cantidad: 0,
    costo: 0,
    fecha: new Date()
  };

  constructor(
    private ventaService: VentaService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  guardar(): void {
    this.ventaService.guardarVenta(this.venta);
  }

  regresar(): void {
    this.router.navigate(['ventas'])
  }
}
