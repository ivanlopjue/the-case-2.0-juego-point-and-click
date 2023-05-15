import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { VentanaJuegoComponent } from '../ventana-juego/ventana-juego.component';
import { Globales} from '../globales';
import { VentanaRankingComponent } from '../ventana-ranking/ventana-ranking.component';


@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {

  main: MainComponent = new MainComponent();
  ventana: VentanaJuegoComponent = new VentanaJuegoComponent();
  ventanaRanking: VentanaRankingComponent = new VentanaRankingComponent();
  regex: RegExp = /^[a-zA-Z0-9]{1,15}$/;


  verJuego(){
    const nombre = prompt("Bienvenido a The Case 2.0.\nPor favor, introduce tu nombre de menos de 15 caracteres:") ?? "";
    if (nombre && nombre != "" && this.regex.test(nombre)) {
      Globales.nombreJugador = nombre;
      this.ventana.verJuego();
      this.ventana.verEstancia("hall");
      Globales.tiempoInicio = Date.now();
    }
  }

  verRanking(){
    this.ventanaRanking.verRanking();
  }

}


