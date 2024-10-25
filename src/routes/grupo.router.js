import { Router } from "express";
import gruposController from "../controllers/grupos.controller";

const gruposRouter = Router();

//Rotas para os Grupos
testRouter.get("/", gruposController.buscarTodosGrupos);
testRouter.get("/subGrupo", gruposController.buscarTodosSubGrupos);
testRouter.post("/created/", gruposController.criarGrupo);
testRouter.post("/subGrupo/created", gruposController.criarSubGrupo);
testRouter.get("/subgrupos/por-grupo/:grupoId", gruposController.buscarSubGruposPorGrupo);

export default gruposRouter;
