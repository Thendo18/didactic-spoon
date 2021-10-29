import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { BudgetService } from './budget.service';
import { Budget } from './interfaces/budget.interface';
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}
  @Get()
 findAll(): Promise<Budget[]> {
    return this.budgetService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id): Promise<Budget> {
    return this.budgetService.findOne(id);
  }

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto): Promise<Budget> {
    return this.budgetService.create(createBudgetDto);
  }
  
  @Delete(':id')
  delete(@Param('id') id): Promise<Budget> {
    return  this.budgetService.delete(id);
  } 

  @Put(':id')
  update(@Body() updateBudgetDto: CreateBudgetDto, @Param('id') id): Promise<Budget>{
    return this.budgetService.update(id,updateBudgetDto );
  }

 
}
