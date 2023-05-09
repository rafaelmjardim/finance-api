import { IncomingModel, IIncoming } from "../models/incoming";
import { Router } from "express";

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const incomings = await IncomingModel.find()

        return res.json(incomings);
    } catch (error) {
        return res.json(error)
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const incomingById = await IncomingModel.findById(id);
        return res.json(incomingById);
    } catch (error) {
        return res.status(500).json(error);
    }
});

routes.post('/', async (req, res) => {
    try {
        const incomingData = req.body;
        const newIncoming = await IncomingModel.create(incomingData);

        return res.json(newIncoming);
    } catch (error) {
        return res.status(500).json(error)
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const updateIncoming = await IncomingModel.findByIdAndUpdate(id, {$set: req.body});

        return res.json({message: 'Editado com sucesso.'})
    } catch (error) {
        return res.status(500).json(error);
    }
});

routes.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const incomingDeleted = await IncomingModel.findByIdAndDelete(id);
        return res.json(incomingDeleted);
    } catch (error) {
        return res.status(500).json(error);
    }

})

export default routes;