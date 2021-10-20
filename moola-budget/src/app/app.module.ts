import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SavingsPageComponent } from './pages/savings-page/savings-page.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
import { QuotesPageComponent } from './pages/quotes-page/quotes-page.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SavingsPageComponent,
    BudgetPageComponent,
    DiaryPageComponent,
    QuotesPageComponent,
    IconsComponent,
    LoginPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
