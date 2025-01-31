import { Router } from "express";
import sessaoController from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.get('/', sessaoController.getAllSessions);
sessionRouter.post('/start', sessaoController.startSession);
sessionRouter.patch('/:sessionId/finalize', sessaoController.finalizeSession);

export default sessionRouter;
