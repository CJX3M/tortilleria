import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  venta1: Venta;

  ventas: Venta[];

  totalVentas: number;

  onSelect(ventaId: number): void {
    this.router.navigate(['detalle',ventaId])
  }

  constructor(
    private ventaService: VentaService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventaService.getVentas().subscribe(ventas => this.ventas = ventas);
    this.totalVentas = this.ventas.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1);
  }
}
