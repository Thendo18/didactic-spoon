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
  async findAll(): Promise<Budget[]> {
    return this.budgetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Budget> {
    return this.budgetService.findOne(id);
  }

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto): string {
    return `Name: ${createBudgetDto.name} Period: ${createBudgetDto.period} Amount: ${createBudgetDto.amount}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete &${id}`;
  }

  @Put(':id')
  update(@Body() updateBudgetDto: CreateBudgetDto, @Param('id') id): string {
    return `Update ${id} -Name: ${updateBudgetDto.name} Period: ${updateBudgetDto.period} Amount: ${updateBudgetDto.amount}`;
  }
}
