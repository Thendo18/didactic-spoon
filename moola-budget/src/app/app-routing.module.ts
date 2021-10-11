import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [ 
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent, pathMatch: 'full'},
  {path:'**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
