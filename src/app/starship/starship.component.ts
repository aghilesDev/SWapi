import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsFacadeService } from '../shared/starships/starships-facade.service';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleFacadeService } from '../shared/people/people-facade.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit, OnDestroy{

  public spaceship$: Observable<any>;
  public pilots$: Observable<any>;

  private subscription:Subscription;

  constructor(private router: Router,private route: ActivatedRoute, private starshipsFacade: StarshipsFacadeService, private peopleFacade: PeopleFacadeService) {
    let id  = parseInt(this.route.snapshot.paramMap.get("id") as string ,10);

    this.spaceship$ = this.starshipsFacade.getStarshps$().pipe(
      map((ships:[]) =>
        ships.find((ship:any) =>  ship.id === id)
      )
    );
    this.pilots$ = combineLatest([this.spaceship$,this.peopleFacade.getPeople$()]).pipe(
      map(([starship,people])=>{
        if(starship === undefined){
          return [];
        }
        return people.filter((p: any) =>starship.pilots.includes(p.url))
      }
    ));
    let startshipCallback = this.onStartShip.bind(this);
    this.subscription = this.spaceship$.subscribe({
      next(value){
        startshipCallback(value)
      }
    });
   }

  ngOnInit(): void {

  }


  onStartShip(value: any){
    console.log("value");
    console.log(value);
    console.log(this.starshipsFacade.Isloaded);
    if(value === undefined){
      this.router.navigate(["pageNotFound"])
      }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
