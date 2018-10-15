import { Component, OnInit } from '@angular/core';
import { venta } from '../venta';
import { VENTAS } from '../ventas';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  venta1: venta;

  ventas = VENTAS;

  totalVentas = VENTAS.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1);

  onSelect(_venta: venta): void {
    this.venta1 = _venta;
  }

  constructor() { }

  ngOnInit() {    
  }

}
