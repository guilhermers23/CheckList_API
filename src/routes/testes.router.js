import { Router } from "express";
import listTestesController from "../controllers/listTestes.controller.js";
import gruposController from "../controllers/grupos.controller.js";

const testRouter = Router();

testRouter.get("/", listTestesController.findAllTestesController);
testRouter.get("/findTesteById/:id", listTestesController.findTesteByIdController);
testRouter.post("/created", listTestesController.createTesteController);
testRouter.delete("/deleted/:id", listTestesController.deleteTesteController);
testRouter.patch("/update/:id", listTestesController.updateTesteController);

testRouter.get("/grupo", gruposController.findAllGrupoController);
testRouter.get("/subGrupo", gruposController.findAllSubGrupoController);

testRouter.post("/created/grupo", gruposController.createGrupoController);
testRouter.post("/created/subGrupo", gruposController.createSubGrupoController);

export default testRouter;
