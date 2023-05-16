import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { TheCaseServiceService } from "../services/the-case-service.service"


@Component({
  selector: 'app-ventana-ranking',
  templateUrl: './ventana-ranking.component.html',
  styleUrls: ['./ventana-ranking.component.css']
})
export class VentanaRankingComponent {
  rankingArray: any[] = [];
  main: MainComponent;
  tabla: any = document.getElementById('rankingGlobal');

  constructor(private TheCaseServiceService: TheCaseServiceService){
    this.main = new MainComponent(TheCaseServiceService);
  }
  ngOnInit(){
    this.TheCaseServiceService.verRanking().subscribe(ranking =>{
      this.rankingArray = ranking;
      this.rankingArray.sort((a, b) => {
        if (a.tiempo > b.tiempo) {
          return 1;
        } else if (a.tiempo < b.tiempo) {
          return -1;
        } else {
          return 0;
        }
      });
    })
  }

  verRanking(){
    if(this.main.ranking.style.display == "grid"){
      this.main.ranking.style.display = "none";
    } else {
      this.main.ranking.style.display = "grid";
      this.main.ranking.style.backgroundImage = "url('../../assets/img/fondos/home/fondo_ranking.jpg')";
    }
  }
}
