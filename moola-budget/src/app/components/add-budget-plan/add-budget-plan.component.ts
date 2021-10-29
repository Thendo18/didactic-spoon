import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-budget-plan',
  templateUrl: './add-budget-plan.component.html',
  styleUrls: ['./add-budget-plan.component.scss']
})
export class AddBudgetPlanComponent implements OnInit {

  details:any;
  constructor(private budgetService:BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getData().subscribe((req)=>
    {
this.details=req;


    })
  }

}
