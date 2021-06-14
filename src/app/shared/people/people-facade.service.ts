import { Injectable } from '@angular/core';
import { PeopleApiService } from './people-api.service';
import { PeopleStateService } from './people-state.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleFacadeService {

  constructor(private peopleApi: PeopleApiService, private peopleState: PeopleStateService) {
    this.loadAllPeople().catch(e=>{});
  }

  getPeople$(){
    return this.peopleState.People$;
  }

  async loadAllPeople(){
    let isAllPeopleLoaded = false;
    let page = 1;
    let people :[]= [];
    while(!isAllPeopleLoaded) {

      let rep = await this.peopleApi.getStarships(page);
      isAllPeopleLoaded = (rep.next === null);
      people = [
        ...people,
        ...rep.results.map((person:any)=> {
          let url:[] = person.url.split("/");
          let id = parseInt(url[url.length-2],10);
          person.id = id
          return person;
      }
      )] as [];
      page ++;

    }
    this.peopleState.setPeople(people);
  }
}
