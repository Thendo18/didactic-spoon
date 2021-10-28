import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';


@Module({
  imports: [],
  controllers: [BudgetController, BudgetController],
  providers: [BudgetService, BudgetService],
})
export class AppModule {}
