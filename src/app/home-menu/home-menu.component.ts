import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { VentanaJuegoComponent } from '../ventana-juego/ventana-juego.component';
import { Globales} from '../globales';
import { VentanaRankingComponent } from '../ventana-ranking/ventana-ranking.component';
import { TheCaseServiceService } from "../services/the-case-service.service"


@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {

  btnJuego: any = document.getElementById("boton-juego");
  btnRnaking: any = document.getElementById("boton-ranking");

  main: MainComponent;
  ventana: VentanaJuegoComponent;
  ventanaRanking: VentanaRankingComponent;
  regex: RegExp = /^[a-zA-Z0-9]{1,15}$/;
  rankingOrdenado: any[] = [];

  constructor(private TheCaseServiceService: TheCaseServiceService){
    this.main = new MainComponent(TheCaseServiceService);
    this.ventana = new VentanaJuegoComponent(TheCaseServiceService);
    this.ventanaRanking = new VentanaRankingComponent(TheCaseServiceService);
  }

  verJuego(){
    const nombre = prompt("Bienvenido a The Case 2.0.\nPor favor, introduce tu nombre de menos de 15 caracteres:") ?? "";
    if (nombre && nombre != "" && this.regex.test(nombre)) {
      Globales.nombreJugador = nombre;
      this.ventana.verJuego();
      this.ventana.verEstancia("hall");
      Globales.tiempoInicio = Date.now();
    } else {
      alert("Nombre incorrecto.\nPor favor, introduce tu nombre de menos de 15 caracteres:");
      this.verJuego();
    }
  }

  verRanking(){
    this.ventanaRanking.verRanking();
  }

}


