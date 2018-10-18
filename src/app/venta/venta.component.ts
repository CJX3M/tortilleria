import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  venta1: Venta;

  ventas: Venta[];

  totalVentas: number;

  onSelect(_venta: Venta): void {
    this.venta1 = _venta;
  }

  constructor(private ventaService: VentaService) { }

  ngOnInit() {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventas = this.ventaService.getVentas();
    this.totalVentas = this.ventas.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1);
  }
}
