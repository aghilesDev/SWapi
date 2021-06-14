import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsStateService {

 // private starships$: BehaviorSubject<[]>;
  private starships$: ReplaySubject<[]>;
  constructor() {
    //this.starships$ = new BehaviorSubject([]);
    this.starships$ = new ReplaySubject(1);
  }

  get Starships$(){
    return this.starships$.asObservable();
  }

  setStarShips(starships: any){
    this.starships$.next(starships);
  }



}
