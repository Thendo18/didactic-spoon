import { Controller, Get, Post, Delete,Body } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
@Controller('budget')
export class BudgetController {

    @Get()
    findAll(): string{
        return 'get budget';
    }
    
    @Post()
    create(@Body()createBudgetDto: CreateBudgetDto): string{
      return `Name: ${createBudgetDto.name} Period: ${createBudgetDto.period}`; 
    }
}
