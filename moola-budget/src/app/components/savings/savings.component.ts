import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

 
  details:any;
  constructor(private budgetService:BudgetService) { }

  ngOnInit(): void {
   
      this.getBudget();
  }

  getBudget(){
    this.budgetService.getData().subscribe( (budget:any)  =>{
        this.details = budget
        console.log(this.details);
    })

  }

}
