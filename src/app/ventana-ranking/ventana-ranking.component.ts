import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Ranking } from '../globales';

@Component({
  selector: 'app-ventana-ranking',
  templateUrl: './ventana-ranking.component.html',
  styleUrls: ['./ventana-ranking.component.css']
})
export class VentanaRankingComponent {
  main: MainComponent = new MainComponent();
  tabla: any = document.getElementById('rankingGlobal');
  objetos: string = "";


  verRanking(){
    if(this.main.ranking.style.display == "grid"){
      this.main.ranking.style.display = "none";
    } else {
      this.main.ranking.style.display = "grid";
      this.main.ranking.style.backgroundImage = "url('../../assets/img/fondos/home/fondo_ranking.jpg')";
    }
  }

  ngOnInit(): void {
    const objetosGuardados = localStorage.getItem(Ranking.toString());
    if (objetosGuardados) {
      this.objetos = JSON.parse(objetosGuardados);
    }
  }

}
