import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComidasComponent } from './lista-comidas/lista-comidas.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { PasteleriaAboutComponent } from './pasteleria-about/pasteleria-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComidasComponent,
    PasteleriaAboutComponent,
    CarritoComponent,
    PasteleriaComponent,
    InputNumeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
