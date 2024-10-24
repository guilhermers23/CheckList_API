import { Router } from "express";
import testeController from "../controllers/Teste.Controller.js";
import gruposController from "../controllers/grupos.controller.js";


const testRouter = Router();

//Rotas para os Testes
testRouter.get("/",testeController.listarTestesPorFiltro);
testRouter.get("/findTesteById/:id", testeController.buscarPorId);
testRouter.post("/created", testeController.criarTeste);
testRouter.delete("/deleted/:id", testeController.excluirTeste);
testRouter.patch("/update/:id",testeController.atualizarTeste);

//Rotas para os Grupos
testRouter.get("/grupo", gruposController.buscarTodosGrupos);
testRouter.get("/subGrupo", gruposController.buscarTodosSubGrupos);
testRouter.post("/created/grupo", gruposController.criarGrupo);
testRouter.post("/created/subGrupo", gruposController.criarSubGrupo);
testRouter.get("/subgrupos/por-grupo/:grupoId", gruposController.buscarSubGruposPorGrupo);

export default testRouter;
