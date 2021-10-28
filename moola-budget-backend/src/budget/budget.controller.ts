import { Controller, Get, Post, Delete,Body, Param, Put } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
@Controller('budget')
export class BudgetController {

    @Get()
    findAll(): string{
        return 'get budget';
    }

    @Post()
    create(@Body()createBudgetDto: CreateBudgetDto): string{
      return `Name: ${createBudgetDto.name} Period: ${createBudgetDto.period} Amount: ${createBudgetDto.amount}`; 
    }

    @Delete(':id')
delete(@Param('id') id): string{

return `Delete &${id}`;
}


@Put(':id')
    update(@Body() updateBudgetDto: CreateBudgetDto, @Param('id')  id): string{
        return `Update ${id} -Name: ${updateBudgetDto.name} Period: ${updateBudgetDto.period} Amount: ${updateBudgetDto.amount}`;
}


}
