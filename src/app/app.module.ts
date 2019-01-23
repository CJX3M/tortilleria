import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons'

import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { AppRoutingModule } from './app-routing.module';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    DetalleVentaComponent,
    GenerarVentaComponent
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
