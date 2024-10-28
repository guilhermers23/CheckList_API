import { Router } from "express";
import gruposRouter from "./grupos.router.js";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import testeRouter from "./task.router.js";

const router = Router();

router.use("/test", testeRouter);
router.use("/grupos", gruposRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
