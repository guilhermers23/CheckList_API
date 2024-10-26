import { Router } from "express";
import gruposController from "../controllers/grupos.controller.js";
import AuthMiddleware from "../middlewares/Auth.Middleware.js";

const gruposRouter = Router();

//Rotas para os Grupos e SubGrupos
gruposRouter.get("/", gruposController.buscarTodosGrupos);
gruposRouter.get("/subGrupo", gruposController.buscarTodosSubGrupos);
gruposRouter.get("/subgrupos/por-grupo/:grupoId", gruposController.buscarSubGruposPorGrupo);

gruposRouter.use(AuthMiddleware.validTokenhMiddleware);
gruposRouter.post("/created/", gruposController.criarGrupo);
gruposRouter.post("/subGrupo/created", gruposController.criarSubGrupo);

export default gruposRouter;
