import { Injectable } from '@nestjs/common';
import { budget } from './interfaces/budget.interface';
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BudgetService {
 constructor(@InjectModel ('budget') private readonly budgetModel: Model<budget>){}


     async findAll(): Promise<budget[]>{
         return await  this.budgetModel.find();
     }


    async  findOne(id: string): Promise <budget>{
        return await this.budgetModel.findOne({_id: id});
    }      
}
