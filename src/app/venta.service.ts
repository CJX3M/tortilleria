import { Injectable } from '@angular/core';
import { Venta } from './venta';
import { VENTAS } from './ventas';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor() { }

  getVentas(): Venta[] {
    return VENTAS;
  }
}
