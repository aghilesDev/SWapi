import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config.json'

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {
  private peoplesUrl = config.api + "people/"
  constructor(private httpClient: HttpClient) { }

  getStarships(page?: number){
    let url:string = this.peoplesUrl + ( page === undefined ? "" : "?page=" + page)
    return this.httpClient.get<any>(url).toPromise();
  }
}
