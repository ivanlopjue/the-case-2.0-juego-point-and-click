export const Globales = {
  nombreJugador: "",
  tiempoInicio: 0,
  tiempoFinal: 0,
  TiempoTotal: 0,
  arrayCulpables: ["","",""],
}

export const Ranking: any[] = [];

export function rellenarRanking(objeto: any) {
  Ranking.push(objeto);
  localStorage.setItem(Ranking.toString(), JSON.stringify(Ranking));
}
