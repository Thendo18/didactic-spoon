import * as mongoose from 'mongoose';

export const BudgetSchema = new mongoose.Schema({
name: String,
period: String,
amount: number,
});
