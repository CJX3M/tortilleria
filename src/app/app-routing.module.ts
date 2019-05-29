import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VentaComponent } from "./venta/venta.component";
import { DetalleVentaComponent } from "./detalle-venta/detalle-venta.component";
import { GenerarVentaComponent } from "./generar-venta/generar-venta.component";
import { VentaGraficaComponent } from "./venta-grafica/venta-grafica.component";
import { ProduccionDiaComponent } from "./produccion-dia/produccion-dia.component";

const routes: Routes = [
  { path: "", redirectTo: "ventas", pathMatch: "full" },
  { path: "ventas", component: VentaComponent },
  { path: "detalle/:id", component: DetalleVentaComponent },
  { path: "nueva", component: GenerarVentaComponent },
  { path: "grafica", component: VentaGraficaComponent },
  { path: "produccion", component: ProduccionDiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
