import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './shared/starships/starships.component';
import { StarshipComponent } from './starship/starship.component';
import { PeopleComponent } from './shared/people/people.component';
import { NotFoundErrorPageComponent } from './not-found-error-page/not-found-error-page.component';

const routes: Routes = [
  {path:'starships/:id', component: StarshipComponent},
  {path:'starships', component: StarshipsComponent},
  {path:'people/:id', component: PeopleComponent},
  {path:'', component: StarshipsComponent},
  {path:'pageNotFound', component: NotFoundErrorPageComponent},
  {path:'**', component: NotFoundErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
