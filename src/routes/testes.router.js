import { Router } from "express";
import gruposController from "../controllers/grupos.controller.js";
import TesteController from "../controllers/Teste.Controller.js";

const testRouter = Router();

testRouter.get("/", TesteController.buscarTodos);
testRouter.get("/findTesteById/:id", TesteController.buscarPorId);
testRouter.post("/created", TesteController.criarTeste);
testRouter.delete("/deleted/:id", TesteController.excluirTeste);
testRouter.patch("/update/:id",TesteController.atualizarTeste);

testRouter.get("/grupo", gruposController.findAllGrupoController);
testRouter.get("/subGrupo", gruposController.findAllSubGrupoController);
testRouter.post("/created/grupo", gruposController.createGrupoController);
testRouter.post("/created/subGrupo", gruposController.createSubGrupoController);

export default testRouter;
