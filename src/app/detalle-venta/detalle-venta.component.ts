import { Component, OnInit, Input } from '@angular/core';
import { venta } from '../venta';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  @Input() venta: venta;

  constructor() { }

  ngOnInit() {
  }

}
