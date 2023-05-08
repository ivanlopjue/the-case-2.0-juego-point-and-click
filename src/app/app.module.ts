import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MainComponent } from './main/main.component';
import { HomeImagenesComponent } from './home-imagenes/home-imagenes.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { VentanaJuegoComponent } from './ventana-juego/ventana-juego.component';
import { VentanaRankingComponent } from './ventana-ranking/ventana-ranking.component';
import { DatosComponent } from './datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    MainComponent,
    HomeImagenesComponent,
    HomeMenuComponent,
    VentanaJuegoComponent,
    VentanaRankingComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
