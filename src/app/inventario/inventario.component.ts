import { Component, OnInit, Input } from '@angular/core';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @Input() material: any;

  mostrarCargando = false;
  mostrarDetalles = false;

  inventario = [];

  constructor(private ventaService: VentaService, private router: Router) {
    this.nuevoMaterial();
  }

  ngOnInit() {
    this.buscarInventario();
  }

  nuevoMaterial(): void {
    this.material = {
      id: '0',
      nombre: '',
      costo: 0
    };
    this.mostrarDetalles = false;
  }

  buscarInventario(): void {
    this.ventaService.buscarInventario().then((res) => {
      if (res !== null) {
        this.inventario = res;
      } else {
        this.mostrarDetalles = true;
      }
    });
  }

  guardar(): void {
    this.ventaService.guardarMaterial(this.material).then(() => {
      this.nuevoMaterial();
      this.buscarInventario();
    });
  }

  cancelar(): void {
    this.nuevoMaterial();
  }

  editar(indice): void {
    this.material = this.inventario[indice];
    this.mostrarDetalles = true;
  }
}
