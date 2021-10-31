import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [ BudgetModule, MongooseModule.forRoot('mongodb+srv://Thendo:password@cluster0.5rkio.mongodb.net/moola-budget')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
