import { Router } from "express";
import listTestesController from "../controllers/listTestes.controller.js";

const testRouter = Router();

testRouter.get("/", listTestesController.findAllTestesController);
testRouter.post("/created", listTestesController.createTesteController);

export default testRouter;