import { Injectable, ɵɵclassMap } from '@angular/core';
import { StarshipsApiService } from './starships-api.service';
import { StarshipsStateService } from './starships-state.service';
import { map, repeat, takeLast } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StarshipsFacadeService {

  private isLoaded = false;
  constructor(private starshipsApi: StarshipsApiService, private starshipsState: StarshipsStateService) {
    this.loadAllStarships().catch(e=>{});
  }

  getStarshps$(){
    return this.starshipsState.Starships$;
  }

  async loadAllStarships(){
    let isAllStarshipsLoades = false;
    let page = 1;
    let spaceships :[]= [];
    while(!isAllStarshipsLoades) {

      let rep = await this.starshipsApi.getStarships(page);
      isAllStarshipsLoades = (rep.next === null);
      spaceships = [
        ...spaceships,
        ...rep.results.map((ship:any)=> {
          let url:[] = ship.url.split("/");
          let id = parseInt(url[url.length-2],10);
          ship.id = id
          return ship;
      }
      )] as [];
      page ++;


    }
    this.starshipsState.setStarShips(spaceships);
    this.isLoaded = true;
    console.log("loaded");
  }
  get Isloaded(){
    return this.isLoaded;
  }
}
