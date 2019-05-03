import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons'

import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { AppRoutingModule } from './app-routing.module';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
import { VentaGraficaComponent } from './venta-grafica/venta-grafica.component';
import { LoadingComponent } from './loading/loading.component';
import { ProduccionDiaComponent } from './produccion-dia/produccion-dia.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    DetalleVentaComponent,
    GenerarVentaComponent,
    VentaGraficaComponent,
    LoadingComponent,
    ProduccionDiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, VentaComponent]
})
export class AppModule { }
