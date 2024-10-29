import { Router } from "express";
import sessionController from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.post('/start', sessionController.startSession);
sessionRouter.post('/:sessionId/tests', sessionController.addTestToSession);
sessionRouter.get('/:sessionId/report', sessionController.generateReport);

export default sessionRouter();
