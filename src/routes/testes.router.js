import { Router } from "express";
import TesteController from "../controllers/teste.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import GlobalMiddleware from "../middlewares/global.middleware.js";

const testRouter = Router();

//Rotas para os Testes
testRouter.get("/",TesteController.listarTestesPorFiltro);
testRouter.patch("/update/:id",TesteController.atualizarTeste);
testRouter.get("/findTesteById/:id", TesteController.buscarPorId);

testRouter.use(AuthMiddleware.validTokenhMiddleware);
testRouter.post("/created", TesteController.criarTeste);

testRouter.use(GlobalMiddleware.validId);
testRouter.delete("/deleted/:id", TesteController.excluirTeste);
testRouter.get("/user/testes", TesteController.findTestesByUserIdController);

export default testRouter;
