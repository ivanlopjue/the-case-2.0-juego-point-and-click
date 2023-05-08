import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { VentanaJuegoComponent } from '../ventana-juego/ventana-juego.component';


@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {

  main: MainComponent = new MainComponent();
  ventana: VentanaJuegoComponent = new VentanaJuegoComponent();

    verJuego(){
      this.main.verJuego();
      this.ventana.verEstancia("hall");
    }

    verRanking(){
      this.main.verRanking();
    }

}


