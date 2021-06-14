import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private navigationService: NavigationService){

  }



  ngOnInit(): void {
  }

  onPreviousPage(){
    this.navigationService.toPreviousPage();
  }

}
