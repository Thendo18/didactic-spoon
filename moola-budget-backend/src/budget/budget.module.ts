import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetSchema } from './schemas/budget.schema';

@Module({ imports: [
    MongooseModule.forFeature([{ name: 'budget', schema: BudgetSchema }]),
  ],
  controllers: [BudgetController],
  providers: [BudgetService],})
export class BudgetModule {}


