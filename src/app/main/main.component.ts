import { Component} from '@angular/core';
import { Globales } from '../globales';
import { ObjetoRanking } from '../datos/datos.component';
import { TheCaseServiceService } from '../services/the-case-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  objetoRanking: ObjetoRanking;
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

  constructor(private TheCaseServiceService: TheCaseServiceService){
    this.objetoRanking = new ObjetoRanking();
  }


  acusar(){
    Globales.tiempoFinal = Date.now();
    Globales.TiempoTotal = (Globales.tiempoFinal - Globales.tiempoInicio) / 1000;
    const tiempo = this.obtenerTiempoJugado(Globales.TiempoTotal);
    if (Globales.intentosAcusacion > 0){
      console.log(this.obtenerValoresSelects().sort());
      if(this.obtenerValoresSelects().every((elem, index) => elem === Globales.arrayCulpables.sort()[index])){
        // console.log("acierto");
        // console.log(tiempo);
        this.objetoRanking.nombre = Globales.nombreJugador;
        this.objetoRanking.tiempo = tiempo.toString();
        this.objetoRanking.culpable = Globales.nombreCulpbale;

        const rankingData = {
          nombre: this.objetoRanking.nombre,
          tiempo: this.objetoRanking.tiempo,
          culpable: this.objetoRanking.culpable
        }

        console.log(this.objetoRanking);
        this.TheCaseServiceService.SetRanking(rankingData);
        console.log("funciona");

      } else {
        console.log("fallo");
        console.log(tiempo);
        Globales.intentosAcusacion--;
        alert("Error, te quedan " + Globales.intentosAcusacion + " intentos");
      }
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
