import { Component } from '@angular/core';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-home-imagenes',
  templateUrl: './home-imagenes.component.html',
  styleUrls: ['./home-imagenes.component.css']
})
export class HomeImagenesComponent {
  cuadroTexto: any = document.getElementsByClassName('img6')
  datos: DatosComponent = new DatosComponent();

  ngOnInit(){
    this.cuadroTexto[0].textContent = this.datos.textoPresentacion;
  }
}




