import { Router } from "express";
import GruposController from "../controllers/grupos.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";

const gruposRouter = Router();

//Rotas para os Grupos e SubGrupos
gruposRouter.get("/", GruposController.buscarTodosGrupos);
gruposRouter.get("/subGrupo", GruposController.buscarTodosSubGrupos);
gruposRouter.get("/subgrupos/por-grupo/:grupoId", GruposController.buscarSubGruposPorGrupo);

gruposRouter.use(AuthMiddleware.validTokenhMiddleware);
gruposRouter.post("/created/", GruposController.criarGrupo);
gruposRouter.post("/subGrupo/created", GruposController.criarSubGrupo);

export default gruposRouter;
