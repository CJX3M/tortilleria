import { Component, OnInit, Input } from "@angular/core";
import { VentaService } from "../venta.service";
import { Router } from "@angular/router";

import * as _ from "lodash";
import * as moment from "moment";

@Component({
  selector: "app-produccion-dia",
  templateUrl: "./produccion-dia.component.html",
  styleUrls: ["./produccion-dia.component.css"]
})
export class ProduccionDiaComponent implements OnInit {
  @Input() produccion: any;

  mostrarCargando: boolean = false;

  constructor(private ventaService: VentaService, private router: Router) {
    this.nuevaProduccion();
  }

  ngOnInit() {
    moment.locale("es");
  }

  nuevaProduccion(): void {
    this.produccion = {
      id: "0",
      kilos: 0,
      fecha: new Date(),
      cantidad: 0,
      inversion: []
    };
    this.mostrarCargando = false;
    this.buscarProduccionDia();
  }

  buscarProduccionDia(): void {
    var dia = moment().format("DDMMYYYY");

    this.ventaService.buscarProduccionDia(dia).then(res => {
      if (res !== null) {
        this.produccion = res;
      } else {
        this.agregarMaterial();
      }
    });
  }

  agregarMaterial(): void {
    this.produccion.inversion.push({
      objeto: "",
      costo: 0
    });
  }

  borrarMaterial(indice): void {
    this.produccion.inversion.splice(indice, 1);
    if (this.produccion.inversion.length === 0) {
      this.agregarMaterial();
    }
  }

  guardar(): void {
    this.mostrarCargando = true;
    this.ventaService.guardarProduccion(this.produccion).then(() => {
      this.nuevaProduccion();
    });
  }

  regresar(): void {
    this.router.navigate(["ventas"]);
  }
}
