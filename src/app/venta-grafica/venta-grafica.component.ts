import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

import * as _ from 'lodash';
import * as moment from 'moment';
import * as Color from 'color';

@Component({
  selector: 'app-venta-grafica',
  templateUrl: './venta-grafica.component.html',
  styleUrls: ['./venta-grafica.component.css']
})
export class VentaGraficaComponent implements OnInit {

  ventasOrigen: any;

  chart: any = null;

  constructor(    
    private ventaService: VentaService, 
    private router: Router) 
  { }

  ngOnInit() {
    moment.locale('es');
    this.obtenerVentas();    
  }

  obtenerVentas(): void {    
    this.ventaService.getVentas().then(ventas => {      
      this.ventasOrigen = _.orderBy(Object.values(ventas), 'fecha', 'desc');
      this.ventasSemana();
    });
  }

  mostrarGrafica(tipo): void {
    switch(tipo) {
      case 'semanal':
        this.ventasSemana();
        break;
      case 'total':
        this.ventaTotal();
        break;
      default:
    }
  }

  ventasSemana(): void {
      const ventasAgrupada = _.map(
          _.groupBy(
              _.filter(this.ventasOrigen, (v:Venta) => moment().add(-7, 'days').toDate().getTime() <= new Date(v.fecha).getTime()), 
              (i) => moment(i.fecha).format('dddd DD/MM/YY')
            ), (v, i) => ({
        label: i,
        total: v.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1),
        totalTortillas: v.filter(v => v.objeto === 'tortilla').length > 0 ? v.filter(v => v.objeto === 'tortilla').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
        totalFrijoles:  v.filter(v => v.objeto === 'frijol').length > 0 ? v.filter(v => v.objeto === 'frijol').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
      }));
      const labels = _.map(ventasAgrupada, (v) => v.label);
      const ventaTortillas = _.map(ventasAgrupada, (v) => v.totalTortillas);
      const ventaFrijol = _.map(ventasAgrupada, (v) => v.totalFrijoles);
      const ventaTotal = _.map(ventasAgrupada, (v) => v.total);
      if (this.chart)
        this.chart.destroy();
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
              label: 'Tortilla',
              data: ventaTortillas,
              backgroundColor: Color('yellow').alpha(0.5).hex(),
              fill: false
            }, {
              label: 'Frijol',
              data: ventaFrijol,
              backgroundColor: Color('brown').alpha(0.5).hex(),
              fill: false
            }, {
              label: 'Venta',
              data: ventaTotal,
              backgroundColor: Color('green').alpha(0.5).hex(),
              fill: false
            },
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      });
  }

  ventaTotal(): void {
      const ventasAgrupada = _.map(
          _.groupBy(
              _.reverse(this.ventasOrigen), 
              (i) => moment(i.fecha).format('DD/MM/YY')
            ), (v, i) => ({
        label: i,
        total: v.map(v => v.cantidad * v.costo).reduce((v, v1) => v + v1),
        totalTortillas: v.filter(v => v.objeto === 'tortilla').length > 0 ? v.filter(v => v.objeto === 'tortilla').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
        totalFrijoles:  v.filter(v => v.objeto === 'frijol').length > 0 ? v.filter(v => v.objeto === 'frijol').reduce((v, v1) => ({cantidad: v.cantidad + v1.cantidad})).cantidad : 0,
      }));
      const labels = _.map(ventasAgrupada, (v) => v.label);
      const ventaTortillas = _.map(ventasAgrupada, (v) => v.totalTortillas);
      const ventaFrijol = _.map(ventasAgrupada, (v) => v.totalFrijoles);
      //const ventaTotal = _.map(ventasAgrupada, (v) => v.total);
      if (this.chart)
        this.chart.destroy();
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
              label: 'Tortilla',
              data: ventaTortillas,
              borderColor: Color('yellow').alpha(0.5).hex(),
              backgroundColor: Color('yellow').alpha(0.5).hex(),
              fill: false            
            }, {
              label: 'Frijol',
              data: ventaFrijol,
              borderColor: Color('brown').alpha(0.5).hex(),
              backgroundColor: Color('brown').alpha(0.5).hex(),
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Venta Total'
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
                display: true,
                scaleLabel : {}
              }
            ],
            yAxes: [{
                display: true,
                scaleLabel : {}
              }
            ]
          }
        }
      });
  }
}
