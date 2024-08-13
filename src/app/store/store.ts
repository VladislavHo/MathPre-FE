import { makeAutoObservable } from 'mobx';


class Poins {
  points = 0
  wins = 0
  constructor() {
    makeAutoObservable(this);
  }



  setPointsAction = (points: number) => {
    this.points = points
  }


  setWinsAction = (wins: number) => {
    this.wins = wins
  }

}



export default new Poins()