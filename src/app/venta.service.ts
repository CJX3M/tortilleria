import { Injectable } from '@angular/core';
import { Venta } from './venta';
import { VENTAS } from './ventas';

import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor() { }

  getVentas(): Observable<Venta[]> {
    return of(VENTAS);
  }

  getVenta(id: string): Observable<Venta> {
    return of(VENTAS.find(v => v.id === id))
  }
}
