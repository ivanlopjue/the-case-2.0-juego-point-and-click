import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-ventana-ranking',
  templateUrl: './ventana-ranking.component.html',
  styleUrls: ['./ventana-ranking.component.css']
})
export class VentanaRankingComponent {
  main: MainComponent = new MainComponent();

  verRanking(){
    this.main.verRanking();
  }
}
