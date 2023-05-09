import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { DatosComponent, Estancia, Personaje, Objeto } from '../datos/datos.component';


@Component({
  selector: 'app-ventana-juego',
  templateUrl: './ventana-juego.component.html',
  styleUrls: ['./ventana-juego.component.css']
})
export class VentanaJuegoComponent {
  datos: DatosComponent = new DatosComponent();
  main: MainComponent = new MainComponent();


  arrayEstancias: Estancia[] = [];
  arrayPersonajes: Personaje[] = [];
  arrayObjetos: Objeto[] = [];

  botonesGeneral: any = document.getElementsByClassName("btn");
  personajeGeneral: any = document.getElementsByClassName("personaje");
  objetosGeneral: any = document.getElementsByClassName("objetos");

  btnPregGeneral: any = document.getElementsByClassName('pregunta');

  btnPreg1: any = document.getElementsByClassName('btnPreg1');
  btnPreg2: any = document.getElementsByClassName('btnPreg2');
  btnPreg3: any = document.getElementsByClassName('btnPreg3');
  btnPreg4: any = document.getElementsByClassName('btnPreg4');
  btnPreg5: any = document.getElementsByClassName('btnPreg5');
  btnPreg6: any = document.getElementsByClassName('btnPreg6');


  botonesHall: any = document.getElementsByClassName('btnsHall');
  botonesHab1: any = document.getElementsByClassName('btnsHab1');
  botonesHab2: any = document.getElementsByClassName('btnsHab2');
  botonesHab3: any = document.getElementsByClassName('btnsHab3');
  botonesHab4: any = document.getElementsByClassName('btnsHab4');
  botonesHab5: any = document.getElementsByClassName('btnsHab5');
  botonesHab6: any = document.getElementsByClassName('btnsHab6');


  verJuego(){
    this.main.verJuego();
    this.verEstancia("hall");
  }

  ngOnInit(){
    this.iniciarJuego();
  }

  ocultar(){
    if(this.botonesGeneral){
      for (var i = 0;i < this.botonesGeneral.length;i++){
        this.botonesGeneral[i].style.display = "none";
      }
      for (var p = 0;p < this.personajeGeneral.length;p++){
        this.personajeGeneral[p].style.display = "none";
      }

      for(var o = 0;o < this.objetosGeneral.length;o++){
        this.objetosGeneral[o].style.display = "none";
      }

      for(var b = 0;b < this.btnPregGeneral.length;b++){
        this.btnPregGeneral[b].style.display = "none";
      }
    }
  }

  verEstancia(nombreEstancia: string){

    this.ocultar();
    switch(nombreEstancia){
      case "hall":
        this.main.cuadroTexto.textContent = "";
        this.main.cuadroTexto.textContent = "Hall";
        this.main.juego.style.backgroundImage = this.datos.imgEstancias[0];

        for (var i = 0;i < this.botonesHall.length;i++){
          this.botonesHall[i].style.display = "block";
        }

        break;
      case "hab1":
        this.main.cuadroTexto.textContent = this.arrayEstancias[0].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[0].imagen;

        for (var i = 0;i < this.botonesHab1.length;i++){
          this.botonesHab1[i].style.display = "block";
        }

        break;
      case "hab2":
        this.main.cuadroTexto.textContent = this.arrayEstancias[1].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[1].imagen;

        for (var i = 0;i < this.botonesHab2.length;i++){
          this.botonesHab2[i].style.display = "block";
        }

        break;
      case "hab3":
        this.main.cuadroTexto.textContent = this.arrayEstancias[2].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[2].imagen;

        for (var i = 0;i < this.botonesHab3.length;i++){
          this.botonesHab3[i].style.display = "block";
        }

        break;
      case "hab4":
        this.main.cuadroTexto.textContent = this.arrayEstancias[3].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[3].imagen;

        for (var i = 0;i < this.botonesHab4.length;i++){
          this.botonesHab4[i].style.display = "block";
        }

        break;
      case "hab5":
        this.main.cuadroTexto.textContent = this.arrayEstancias[4].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[4].imagen;

        for (var i = 0;i < this.botonesHab5.length;i++){
          this.botonesHab5[i].style.display = "block";
        }

        break;
      case "hab6":
        this.main.cuadroTexto.textContent = this.arrayEstancias[5].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[5].imagen;

        for (var i = 0;i < this.botonesHab6.length;i++){
          this.botonesHab6[i].style.display = "block";
        }

        break;
    }

  }

  verPersonaje(numero: number){
    for(var o = 0;o < this.objetosGeneral.length;o++){
      this.objetosGeneral[o].style.display = "none";
    }
    switch (numero){
      case 0:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg1.length; i++){
            this.btnPreg1[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg1.length; i++){
            this.btnPreg1[i].style.display = "block";
          }
        }
        break;
      case 1:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg2[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg2[i].style.display = "block";
          }
        }
        break;
      case 2:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg3[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg3[i].style.display = "block";
          }
        }
        break;
        case 3:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg4[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg4[i].style.display = "block";
          }
        }
        break;
        case 4:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg5[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg5[i].style.display = "block";
          }
        }
        break;
        case 5:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg6[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg6[i].style.display = "block";
          }
        }
        break;
      }
  }

  verObjeto(numero: number){
    this.main.cuadroTexto.textContent = "";
    if(this.objetosGeneral[numero].style.display == "block"){
      this.objetosGeneral[numero].style.display = "none";
    } else {
      this.objetosGeneral[numero].style.display = "block";
      this.main.cuadroTexto.textContent = this.arrayEstancias[numero].objeto.descripcion;
    }
  }


  mezclarArray(array: any[]): any {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  iniciarJuego(){
    this.mezclarArray(this.datos.imgPersonaje);
    this.mezclarArray(this.datos.imgObjetos);
    this.mezclarArray(this.datos.rolEstanciaYObjeto);

    for (var i = 0; i < 6;i++){
      this.arrayPersonajes[i] = new Personaje();
      this.arrayPersonajes[i].rol = this.datos.rolEstanciaYObjeto[i];
      this.arrayPersonajes[i].imagen = this.datos.imgPersonaje[i];
      this.arrayPersonajes[i].nombre = this.arrayPersonajes[i].imagen.substring(28, 32).replace("_","");
      this.arrayPersonajes[i].respNombre = this.arrayPersonajes[i].nombre;
      if (this.arrayPersonajes[i].rol == "inocente"){
        this.arrayPersonajes[i].respCoartada = "soy inocente";
      } else {
        this.arrayPersonajes[i].respCoartada = "soy culpable";
      }
      if (this.arrayPersonajes[i].rol == "inocente"){
        this.arrayPersonajes[i].respAcusar = "no acuso";
      } else {
        this.arrayPersonajes[i].respAcusar = "todos culpables";
      }

      this.arrayObjetos[i] = new Objeto();
      this.arrayObjetos[i].nombre = this.arrayObjetos[i].imagen.substring(33, 34);
      this.arrayObjetos[i].imagen = this.datos.imgObjetos[i];
      this.arrayObjetos[i].rol = this.datos.rolEstanciaYObjeto[i];
      this.arrayObjetos[i].descripcion = "";

      this.arrayEstancias[i] = new Estancia();
      this.arrayEstancias[i].nombre = this.datos.nombreEstacnias[i];
      this.arrayEstancias[i].imagen = this.datos.imgEstancias[i+1];
      this.arrayEstancias[i].descripcion = this.datos.descEstancias[i];
      this.arrayEstancias[i].rol = this.datos.rolEstanciaYObjeto[i];
      this.arrayEstancias[i].personaje = this.arrayPersonajes[i];
      this.arrayEstancias[i].objeto = this.arrayObjetos[i];
    }
  }


  respuestasPersonaje(numero: number, estancias: Estancia[], pregunta: string){
    switch (pregunta){
      case "nombre":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respNombre;
        break;
      case "acusar":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respAcusar;
        break;
      case "coartada":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respCoartada;
        break;
    }

  }

}



