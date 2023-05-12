import { Component} from '@angular/core';
import { Globales, Ranking, rellenarRanking } from '../globales';
import { ObjetoRanking } from '../datos/datos.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  rankingGlobal: ObjetoRanking = new ObjetoRanking();
  arrayCulpable: any [] = [];
  botonAcusar: any = document.getElementById('botonAcusar');

  pie: any = document.getElementById('pie');
  cuerpo: any = document.getElementById('cuerpo');
  cabecera: any = document.getElementById('cabecera');

  contenedor: any = document.getElementById('contenedor-global');

  cuadroMisNotas: any = document.getElementById('misNotas');
  cuadroTexto: any = document.getElementById('textoJuego');
  juego: any = document.getElementById('juego');
  ranking: any = document.getElementById('ranking');

  opcionesEstancias: any = document.getElementById('estancia');
  opcionesPersonajes: any = document.getElementById('personaje');
  opcionesObjetos: any = document.getElementById('objeto');


  acusar(){
    Globales.tiempoFinal = Date.now();
    Globales.TiempoTotal = (Globales.tiempoFinal - Globales.tiempoInicio) / 1000;
    const tiempo = this.obtenerTiempoJugado(Globales.TiempoTotal);

    console.log(this.obtenerValoresSelects().sort());
    if(this.obtenerValoresSelects().every((elem, index) => elem === Globales.arrayCulpables.sort()[index])){
      console.log("acierto");
      console.log(tiempo);

      this.rankingGlobal.nombre = Globales.nombreJugador;
      this.rankingGlobal.tiempo = tiempo.toString();
      this.rankingGlobal.culpable = "noah";
      // Esto hay que cambiarlo por el personaje culpable

      Ranking.push(this.rankingGlobal);
      localStorage.setItem('Ranking', JSON.stringify(Ranking));

    } else {
      console.log("fallo");
      console.log(tiempo);
    }
  }

  obtenerValoresSelects() {
    const selects = document.querySelectorAll<HTMLSelectElement>('select');
    const valoresSelects: any[] = [];

    for (let i = 0; i < selects.length; i++) {
      const select = selects[i];
      valoresSelects[i] = select.value;
    }

    return valoresSelects.sort();
  }

  obtenerTiempoJugado(tiempo: number){
    const hours = Math.floor(tiempo / 3600);
    const minutes = Math.floor((tiempo % 3600) / 60);
    const seconds = Math.floor(tiempo % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
