import { Injectable } from '@angular/core';
import { Venta } from './venta';
import { api } from './api/'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor() { }

  getVentas(): Observable<Venta[]> {
    return of(api.obtenerVentas());
  }

  getVenta(id: string): Observable<Venta> {
    return of(api.obtenerVenta(id));
  }

  guardarVenta(venta: Venta): void {
    api.guardarVenta(venta);
  }
}
