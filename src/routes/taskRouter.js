import { Router } from "express";
import globalMiddleware from "../middlewares/globalMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import taskController from "../controllers/taskController.js";

const testRouter = Router();

//Rotas para os Testes
testRouter.get("/", taskController.listarTestesPorFiltro);
testRouter.patch("/update/:id", taskController.atualizarTeste);
testRouter.get("/findTesteById/:id", taskController.buscarPorId);

testRouter.use(authMiddleware.validTokenhMiddleware);
testRouter.post("/created", taskController.criarTeste);

testRouter.use(globalMiddleware.validId);
testRouter.delete("/deleted/:id", taskController.excluirTeste);
testRouter.get("/user/testes", taskController.findTestesByUserIdController);

export default testRouter;
