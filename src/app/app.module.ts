import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
import { VentaGraficaComponent } from './venta-grafica/venta-grafica.component';
import { LoadingComponent } from './loading/loading.component';
import { ProduccionDiaComponent } from './produccion-dia/produccion-dia.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    DetalleVentaComponent,
    GenerarVentaComponent,
    VentaGraficaComponent,
    LoadingComponent,
    ProduccionDiaComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, VentaComponent]
})
export class AppModule { }
