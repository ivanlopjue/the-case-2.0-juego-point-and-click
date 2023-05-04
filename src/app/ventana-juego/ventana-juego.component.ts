import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-juego',
  templateUrl: './ventana-juego.component.html',
  styleUrls: ['./ventana-juego.component.css']
})
export class VentanaJuegoComponent {
  botones: any = document.getElementsByClassName("btn");

  ocultar(){
    if(this.botones){
      for (var i = 0;i < this.botones.length;i++){
        this.botones[i].style.display = "none";
      }
    }
  }
}
