import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  imgEstancias: any[] = [
    "url('../../assets/img/fondos/estancias/hall.jpg')",
    "url('../../assets/img/fondos/estancias/hab_uno.jpg')",
    "url('../../assets/img/fondos/estancias/hab_dos.jpg')",
    "url('../../assets/img/fondos/estancias/hab_tres.jpg')",
    "url('../../assets/img/fondos/estancias/hab_cuatro.jpg')",
    "url('../../assets/img/fondos/estancias/hab_cinco.jpg')",
    "url('../../assets/img/fondos/estancias/hab_seis.jpg')"
  ];

  imgPersonaje: any [] = [
    "../../assets/img/personajes/Noah_Rios/noah.png",
    "../../assets/img/personajes/Doctor_X/doctor.png",
    "../../assets/img/personajes/Emily_Yang/emily.png",
    "../../assets/img/personajes/Isa_Cortés/isa.png",
    "../../assets/img/personajes/Mei_Chen/mei.png",
    "../../assets/img/personajes/Vicky_Peña/vicky.png"
  ];

  imgObjetos: any [] = [
    "../../assets/img/objetos/objetos/5.png",
    "../../assets/img/objetos/objetos/10.png",
    "../../assets/img/objetos/objetos/6.png",
    "../../assets/img/objetos/objetos/8.png",
    "../../assets/img/objetos/objetos/1.png",
    "../../assets/img/objetos/objetos/2.png",
  ];
}

export class Estancia {
  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  personaje: string = "";
  objeto: string = "";
  rol: string = "";
}

export class Personaje{
  nombre: string = "";
  imagen: string = "";
  rol: string = "";
  respNombre: string = this.nombre;
  respAcusar: string = "";
  respCoartada: string = "";
}

export class Objeto{
  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  rol: string = "";
}
