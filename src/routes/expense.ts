import { Router } from  "express";
import { ExpenseModel, IExpense } from "../models/expense";

const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const expenses: IExpense[] = await ExpenseModel.find().exec();
        return res.json(expenses);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Erro ao listar as despesas"})
    }
});


export default routes;