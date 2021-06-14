import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './shared/starships/starships.component';
import { StarshipsFacadeService } from './shared/starships/starships-facade.service';
import { StarshipsStateService } from './shared/starships/starships-state.service';
import { StarshipsApiService } from './shared/starships/starships-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StarshipComponent } from './starship/starship.component';
import { PeopleComponent } from './shared/people/people.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NotFoundErrorPageComponent } from './not-found-error-page/not-found-error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipComponent,
    PeopleComponent,
    NavigationBarComponent,
    NotFoundErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarshipsFacadeService,
    StarshipsStateService,
    StarshipsApiService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
