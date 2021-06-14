import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private previousUrls:string[]= [];
  private hasPrevious= false

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event:any) => {
      console.log('prev:', event.url);
      this.previousUrls.push(event.url);
      this.hasPrevious = (this.previousUrls.length >= 2);
    });
  }
  get HasPrevious(){
    return this.hasPrevious;
  }

  toPreviousPage(){
    if(!this.hasPrevious){
      return;
    }
    this.previousUrls.pop();
    let destination = this.previousUrls.pop();
    this.hasPrevious = (this.previousUrls.length >= 2);
    this.router.navigate([destination]);

  }
}
