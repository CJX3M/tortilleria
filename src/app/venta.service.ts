import { Injectable } from "@angular/core";
import { Venta } from "./venta";
import { api } from "./api";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VentaService {
  constructor() {}

  getVentas() {
    return api.obtenerVentas();
  }

  getVenta(id: string) {
    return api.obtenerVenta(id);
  }

  getVentaSemana(inicio: number, fin: number) {
    return api.obtenerVentasSemana(inicio, fin);
  }

  guardarVenta(venta: Venta) {
    return api.guardarVenta(venta);
  }

  actualizarVenta(venta: Venta) {
    return api.actualizarVenta(venta);
  }

  guardarProduccion(produccion: any) {
    return api.guardarProduccion(produccion);
  }

  actualizarProduccion(produccion: any) {
    return api.actualizarProduccion(produccion);
  }

  buscarProduccionDia(dia: string) {
    return api.buscarProduccionDia(dia);
  }

  buscarProducciones() {
    return api.buscarProducciones();
  }

  getProduccionSemana(inicio: number, fin: number) {
    return api.buscarProduccionSemana(inicio, fin);
  }
}
