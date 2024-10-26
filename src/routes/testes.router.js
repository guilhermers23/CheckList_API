import { Router } from "express";
import testeController from "../controllers/Teste.Controller.js";
import AuthMiddleware from "../middlewares/Auth.Middleware.js";
import globalMiddleware from "../middlewares/global.middleware.js";

const testRouter = Router();

//Rotas para os Testes
testRouter.get("/",testeController.listarTestesPorFiltro);
testRouter.patch("/update/:id",testeController.atualizarTeste);
testRouter.get("/findTesteById/:id", testeController.buscarPorId);

testRouter.use(AuthMiddleware.validTokenhMiddleware);
testRouter.post("/created", testeController.criarTeste);

testRouter.use(globalMiddleware.validId);
testRouter.delete("/deleted/:id", testeController.excluirTeste);
testRouter.get("/user/testes", testeController.findTestesByUserIdController);

export default testRouter;
