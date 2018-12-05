import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  @Input() venta: Venta;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ventaService: VentaService
  ) { }

  ngOnInit(): void {
    this.obtenerVenta();
  }

  obtenerVenta(): void {
    const id = this.route.snapshot.paramMap.get('id');    
    this.ventaService.getVenta(id).then(_venta => {
      console.log(_venta);
      this.venta = _venta      
    });
  }

  regresar(): void {
    this.router.navigate(['ventas'])
  }

}
