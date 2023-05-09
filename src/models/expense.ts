import { model, Schema, Document } from "mongoose";

interface IExpense extends Document {
    name: string;
    value: number;
    date: string;
    status: string;
}

const ExpenseSchema = new Schema({
    name: {type: String},
    value:{type: Number},
    date:{type: String},
    status:{type: String},
});

const ExpenseModel = model<IExpense>("Expense", ExpenseSchema);

export { ExpenseModel, IExpense};