import { Router } from "express";
import testeController from "../controllers/Teste.Controller.js";

const testRouter = Router();

//Rotas para os Testes
testRouter.get("/",testeController.listarTestesPorFiltro);
testRouter.get("/findTesteById/:id", testeController.buscarPorId);
testRouter.post("/created", testeController.criarTeste);
testRouter.delete("/deleted/:id", testeController.excluirTeste);
testRouter.patch("/update/:id",testeController.atualizarTeste);

export default testRouter;
