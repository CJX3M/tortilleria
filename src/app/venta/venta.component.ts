import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  venta1: Venta;

  ventasOrigen: Venta[];

  ventas: Venta[];

  ventasAgrupado: any;

  grupoContraido: boolean[];

  totalVentas: number;

  agrupado: boolean;

  mostrarCargando: boolean;

  produccionOrigen: any;

  produccionAgrupado: any;

  totalInversion: number;

  onSelect(ventaId: string): void {
    this.router.navigate(['detalle', ventaId])
  }

  constructor(
    private ventaService: VentaService, 
    private router: Router
    ) { }

  ngOnInit() {
    moment.locale('es');
    this.mostrarCargando = true;
    this.totalInversion = 0;
    this.obtenerVentas();
    this.obtenerProduccion();
  }

  obtenerVentas(): void {
    this.ventaService.getVentas().then(ventas => {
      this.ventasOrigen = this.ventas = _.orderBy(Object.values(ventas), 'fecha', 'desc');
      this.totalVentas = this.ventas.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1);
      this.mostrarCargando = false;
    });
  }

  obtenerProduccion(): void {
    this.ventaService.buscarProducciones().then(produccion => {
      this.produccionOrigen = _.orderBy(Object.values(produccion), 'fecha', 'desc');
      this.mostrarCargando = false;
      _.each(this.produccionOrigen, (p) => {
        this.totalInversion += p.inversion.map(m => m.costo).reduce((m, m1) => m + m1);
      });
    });
  }

  agruparVenta(tipo): void {
    this.agrupado = true;
    this.mostrarCargando = true;
    let agrupado;
    switch(tipo) {
      case "dia":        
        agrupado = _.groupBy(this.ventasOrigen, (i) => moment(i.fecha).format('dddd DD/MM/YY'));
        this.produccionAgrupado = _.groupBy(this.produccionOrigen, (p) => moment(p.fecha).format('dddd DD/MM/YY'));
        break;
      case "mes":
        agrupado = _.groupBy(this.ventasOrigen, (i) => moment(i.fecha).format('MM/YY'));
        this.produccionAgrupado = _.groupBy(this.produccionOrigen, (p) => moment(p.fecha).format('MM/YY'));
        break;
      case "año":
        agrupado = _.groupBy(this.ventasOrigen, (i) => moment(i.fecha).format('YYYY'));
        this.produccionAgrupado = _.groupBy(this.produccionOrigen, (p) => moment(p.fecha).format('YYYY'));
        break;
      case "todo":
        this.agrupado = false;
        break;
    }
    this.mostrarCargando = false;
    if (agrupado) {
      this.ventasAgrupado = _.map(agrupado, (v, i) => {
        let inversion = this.produccionAgrupado[i] ? _.map(this.produccionAgrupado[i], (d) => _.map(d.inversion, (d1) => d1.costo))[0].reduce((v, v1) => v + v1) : 0;
        let cantidad = this.produccionAgrupado[i] ? _.map(this.produccionAgrupado[i], (d) => d.cantidad).reduce((v, v1) => v + v1) : 0;
        return {
          group: i,
          array: v,
          total: v.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1),
          inversion: inversion,
          totalTortillas: v.filter(v => v.objeto === 'tortilla').length > 0 ? v.filter(v => v.objeto === 'tortilla').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
          totalFrijoles:  v.filter(v => v.objeto === 'frijol').length > 0 ? v.filter(v => v.objeto === 'frijol').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
          sobraron: cantidad - (v.filter(v => v.objeto === 'tortilla').length > 0 ? v.filter(v => v.objeto === 'tortilla').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0),
          show: false
        }
      });      
    }
  }

  nueva(): void {
    this.router.navigate(['nueva'])
  }
}
