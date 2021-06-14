import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipsFacadeService } from './starships-facade.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public spaceships$: Observable<any>;
  constructor(private starshipsFacade: StarshipsFacadeService) {
    this.spaceships$ = this.starshipsFacade.getStarshps$();
    console.log("init");
   }

  ngOnInit(): void {

  }

  onStarshipClick(id: number){
    console.log("id is: " + id)
  }



}
