import { Router } from "express";
import testRouter from "./testes.router.js";
import gruposRouter from "./grupos.router.js";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

const router = Router();

router.use("/test", testRouter);
router.use("/grupos", gruposRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
