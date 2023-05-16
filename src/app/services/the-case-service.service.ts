import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import RankingInterface from '../interfaces/rankingInterface';
import { ObjetoRanking } from '../datos/datos.component';

@Injectable({
  providedIn: 'root'
})
export class TheCaseServiceService {

  constructor(private firestore: Firestore) { }

  verRanking(): Observable<RankingInterface[]> {
    const rankingG = collection(this.firestore, 'ranking');
    return collectionData(rankingG, {idField: 'nombre'}) as Observable<RankingInterface[]>
  }

  SetRanking(objetoRanking: ObjetoRanking){
    var rankingGlobal = collection(this.firestore, 'ranking')
    return addDoc(rankingGlobal, objetoRanking);
  }
}
