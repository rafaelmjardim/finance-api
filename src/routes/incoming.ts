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

export default routes;