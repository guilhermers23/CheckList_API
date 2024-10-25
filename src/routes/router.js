import { Router } from "express";
import testRouter from "./testes.router.js";
import gruposRouter from "./grupo.router.js";

const router = Router();

router.use("/test", testRouter);
router.use("/grupos", gruposRouter);

export default router;
