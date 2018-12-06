import { Injectable } from '@angular/core';
import { Venta } from './venta';
import { api } from './api'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor() { }

  getVentas() {
    return api.obtenerVentas();
  }

  getVenta(id: string) {
    return api.obtenerVenta(id);
  }

  guardarVenta(venta: Venta) {
    return api.guardarVenta(venta);
  }
}
