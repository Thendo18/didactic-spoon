import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [ BudgetModule, MongooseModule.forRoot('mongodb+srv://Thendo:password@cluster0.5rkio.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-wq1a89-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
