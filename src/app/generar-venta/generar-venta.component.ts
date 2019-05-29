import { Component, OnInit, Input } from "@angular/core";
import { Venta } from "../venta";
import { VentaService } from "../venta.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-generar-venta",
  templateUrl: "./generar-venta.component.html",
  styleUrls: ["./generar-venta.component.css"]
})
export class GenerarVentaComponent implements OnInit {
  @Input() venta: Venta;

  mostrarCargando: boolean;

  constructor(private ventaService: VentaService, private router: Router) {
    this.nuevaVenta();
  }

  ngOnInit() {}

  guardar(): void {
    this.mostrarCargando = true;
    this.ventaService.guardarVenta(this.venta).then(() => this.nuevaVenta());
  }

  regresar(): void {
    this.router.navigate(["ventas"]);
  }

  nuevaVenta() {
    this.venta = {
      id: "0",
      objeto: "",
      cantidad: 0,
      costo: 0,
      fecha: new Date()
    };
    this.mostrarCargando = false;
  }
}
