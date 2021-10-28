import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetController } from './budget/budget.controller';
import { BudgetService } from './budget/budget.service';

@Module({
  imports: [],
  controllers: [AppController, BudgetController],
  providers: [AppService, BudgetService],
})
export class AppModule {}
