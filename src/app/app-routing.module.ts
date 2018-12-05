import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';

const routes: Routes = [
  { path: '', redirectTo: 'ventas', pathMatch: 'full'},
  { path: 'ventas', component: VentaComponent },
  { path: 'detalle/:id', component: DetalleVentaComponent },
  { path: 'nueva', component: GenerarVentaComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
