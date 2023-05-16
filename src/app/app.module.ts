import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeImagenesComponent } from './home-imagenes/home-imagenes.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { VentanaJuegoComponent } from './ventana-juego/ventana-juego.component';
import { VentanaRankingComponent } from './ventana-ranking/ventana-ranking.component';
import { DatosComponent } from './datos/datos.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'; // Importa HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeImagenesComponent,
    HomeMenuComponent,
    VentanaJuegoComponent,
    VentanaRankingComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
