import { Injectable } from '@nestjs/common';
import { Budget} from './interfaces/budget.interface'
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BudgetService {
 constructor(@InjectModel ('budget') private readonly budgetModel: Model<Budget>){}


     async findAll(): Promise<Budget[]>{
         return await  this.budgetModel.find();
     }


    async  findOne(id: string): Promise <Budget>{
        return await this.budgetModel.findOne({_id: id});
    }    
    
    async create(budget:  Budget): Promise<Budget>{
        const newBudget = new this.budgetModel(budget); 
        return await newBudget.save();
    }

}
