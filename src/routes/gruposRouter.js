import { Router } from "express";
import AuthMiddleware from "../middlewares/authMiddleware.js";
import gruposcontroller from "../controllers/gruposController.js";

const gruposRouter = Router();

//Rotas para os Grupos e SubGrupos
gruposRouter.get("/", gruposcontroller.buscarTodosGrupos);
gruposRouter.get("/subGrupo", gruposcontroller.buscarTodosSubGrupos);
gruposRouter.get("/subgrupos/por-grupo/:grupoId", gruposcontroller.buscarSubGruposPorGrupo);

gruposRouter.use(AuthMiddleware.validTokenhMiddleware);
gruposRouter.post("/created", gruposcontroller.criarGrupo);
gruposRouter.post("/subGrupo/created", gruposcontroller.criarSubGrupo);

export default gruposRouter;
