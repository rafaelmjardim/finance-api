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

routes.get("/:id", async (req, res) => {
    try {
        const id =  req.params.id;
        const expenseById = await ExpenseModel.findById(id);
        return res.json(expenseById);
    } catch (error) {
        return res.json({erro: "Nenhum dado encontrado."})
    }
})

routes.post("/", async (req, res) => {
    try {
        const expense: IExpense = req.body;
        const newExpense = await ExpenseModel.create(expense);
        
        return res.status(201).json(newExpense);
    } catch (error) {
        return res.status(500).json({error: "Erro ao cadastrar despesa."})
    }
})

routes.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateExpense = await ExpenseModel.findByIdAndUpdate(id, {$set: req.body});

        return res.json({message: 'Editado com sucesso.'})
    } catch (error) {
        return res.status(500).json({erro: 'Erro ao editar despesa.'})
    }
});

routes.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const expenseDeleted = await ExpenseModel.findByIdAndDelete(id)

        return res.json(expenseDeleted)
    } catch (error) {
        return res.status(500).json({erro: 'Erro ao deletar despesa.'})
    }
})


export default routes;