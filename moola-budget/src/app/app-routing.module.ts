import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetPlanComponent } from './components/add-budget-plan/add-budget-plan.component';
import { IconsComponent } from './components/icons/icons.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanABudgetComponent } from './components/plan-a-budget/plan-a-budget.component';
import { RegisterComponent } from './components/register/register.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { QuotesPageComponent } from './pages/quotes-page/quotes-page.component';
import { SavingsPageComponent } from './pages/savings-page/savings-page.component';

const routes: Routes = [ 
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent, pathMatch: 'full'},
  {path:'login', component: LoginPageComponent, pathMatch: 'full'},
  {path: 'budget', component:BudgetPageComponent,pathMatch: 'full'},
  {path: 'diary', component:DiaryPageComponent,pathMatch: 'full'},
  {path: 'quotes', component:QuotesPageComponent,pathMatch: 'full'},
  {path: 'savings', component:SavingsPageComponent,pathMatch: 'full'},
  {path: 'add', component:AddBudgetPlanComponent,pathMatch: 'full'},
  {path: 'plan', component:PlanABudgetComponent,pathMatch: 'full'},
  {path: 'register', component:RegisterComponent,pathMatch: 'full'},
  {path: 'wallet', component:SavingsPageComponent,pathMatch: 'full'},
  {path:'**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
