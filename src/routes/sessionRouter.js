import { Router } from "express";
import sessaoController from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.post('/start', sessaoController.startSession);
sessionRouter.put('/complete/:id', sessaoController.completeSession);
sessionRouter.get('/report/:id', sessaoController.getSessionReport);

export default sessionRouter;
