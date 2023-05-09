import { Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  pie: any = document.getElementById('pie');
  cuerpo: any = document.getElementById('cuerpo');
  cabecera: any = document.getElementById('cabecera');

  contenedor: any = document.getElementById('contenedor-global');

  cuadroMisNotas: any = document.getElementById('misNotas');
  cuadroTexto: any = document.getElementById('textoJuego');
  juego: any = document.getElementById('juego');
  ranking: any = document.getElementById('ranking');

  verJuego(){

      if(this.juego.style.display == "grid"){
        this.juego.style.display = "none";
        this.cuadroMisNotas.style.display = "none";
        this.cuadroTexto.style.display = "none";

      } else {
        this.juego.style.display = "grid";
        this.cuadroMisNotas.style.display = "block";
        this.cuadroTexto.style.display = "block";
      }
    }


  verRanking(){

      if(this.ranking.style.display == "grid"){
        this.ranking.style.display = "none";
      } else {
        this.ranking.style.display = "grid";
        this.ranking.style.backgroundImage = "url('../../assets/img/fondos/home/fondo_ranking.jpg')";
      }
  }

}
