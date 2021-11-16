import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  url:any= "http://localhost:3000/budget";
  constructor(private httpClient: HttpClient) { }


  getData(){ 
    return this.httpClient.get(`${this.url}`);
  }

}
