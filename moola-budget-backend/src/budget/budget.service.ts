import { Injectable } from '@nestjs/common';
import { budget } from './interfaces/budget.interface';

@Injectable()
export class BudgetService {
 
private readonly budget: budget[] = [
{
    id: "343434563",
    name: "fixed investment",
    "amount":10000,
    period:"1 year"
}
     ] 
        
}
