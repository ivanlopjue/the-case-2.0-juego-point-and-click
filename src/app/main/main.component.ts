import { Component } from '@angular/core';
import { VentanaJuegoComponent } from '../ventana-juego/ventana-juego.component';
import { HomeMenuComponent } from '../home-menu/home-menu.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  ventanaJuego = new VentanaJuegoComponent();

  juego = document.getElementById('juego');
  ranking = document.getElementById('ranking');


  verJuego(){
    if(this.juego) {
      if(this.juego.style.display == "grid"){
        this.juego.style.display = "none";
      } else {
        this.ventanaJuego.ocultar();
        this.juego.style.display = "grid";
        this.juego.style.animation = "colorBorde 20s infinite alternate, abrirDivs 3s";
      }

    }

  }

  verRanking(){

    if(this.ranking){
      if(this.ranking.style.display == "grid"){
        this.ranking.style.display = "none";
      } else {
        this.ranking.style.display = "grid";
        this.ranking.style.animation = 'abrirDivs 3s';
        this.ranking.style.backgroundImage = "url('../../assets/img/fondos/home/fondo_ranking.jpg')";
      }
    }
  }

}
