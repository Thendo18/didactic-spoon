import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetController } from './budget/budget.controller';

@Module({
  imports: [],
  controllers: [AppController, BudgetController],
  providers: [AppService],
})
export class AppModule {}
