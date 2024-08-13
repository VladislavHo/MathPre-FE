import { makeAutoObservable } from 'mobx';


class Poins {
  points = 0
  constructor(){
    makeAutoObservable(this);
  }



  setPointsAction = (points: number) => {
    this.points = points
  }

}



export default new Poins()