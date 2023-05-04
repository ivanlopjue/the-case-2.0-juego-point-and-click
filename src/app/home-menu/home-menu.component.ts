import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {
  main = new MainComponent();

    verJuego(){
      this.main.verJuego();
    }

    verRanking(){
      this.main.verRanking();
    }
}
