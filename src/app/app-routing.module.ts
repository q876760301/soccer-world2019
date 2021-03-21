import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeampageComponent } from './teampage/teampage.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component: HomepageComponent},
  {path:'team/:id', component: TeampageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TeampageComponent,HomepageComponent]