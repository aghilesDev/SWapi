import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleStateService {

  //private people$: BehaviorSubject<[]>;
  private people$: ReplaySubject<[]>;
  constructor() {
    //this.people$ = new BehaviorSubject([]);
    this.people$ = new ReplaySubject(1);
  }

  get People$(){
    return this.people$.asObservable();
  }

  setPeople(people: any){
    this.people$.next(people);
  }
}
