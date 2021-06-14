import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleFacadeService } from './people-facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit,OnDestroy {

  public pilote$: Observable<any>;
  private subscription:Subscription;

  constructor(private router: Router,private route: ActivatedRoute, private peopleFacade: PeopleFacadeService) {
    let id  = parseInt(this.route.snapshot.paramMap.get("id") as string ,10);
    this.pilote$ = this.peopleFacade.getPeople$().pipe(
      map((pilotes:[]) =>
      pilotes.find((ship:any) =>  ship.id === id)
      )
    );
    let peopleCallback = this.onPeople.bind(this);
    this.subscription = this.pilote$.subscribe({
      next(value){
        peopleCallback(value)
      }
    });
  }

  ngOnInit(): void {

  }

  onPeople(value: any){
    if(value === undefined){
      this.router.navigate(["pageNotFound"])
      }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
