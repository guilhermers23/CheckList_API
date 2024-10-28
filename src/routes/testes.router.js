import { Router } from "express";
import globalMiddleware from "../middlewares/global.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import testeController from "../controllers/teste.controller.js";

const testRouter = Router();

//Rotas para os Testes
testRouter.get("/", testeController.listarTestesPorFiltro);
testRouter.patch("/update/:id", testeController.atualizarTeste);
testRouter.get("/findTesteById/:id", testeController.buscarPorId);

testRouter.use(authMiddleware.validTokenhMiddleware);
testRouter.post("/created", testeController.criarTeste);

testRouter.use(globalMiddleware.validId);
testRouter.delete("/deleted/:id", testeController.excluirTeste);
testRouter.get("/user/testes", testeController.findTestesByUserIdController);

export default testRouter;
