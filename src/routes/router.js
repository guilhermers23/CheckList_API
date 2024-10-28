import { Router } from "express";
import gruposRouter from "./gruposRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import testeRouter from "./taskRouter.js";

const router = Router();

router.use("/test", testeRouter);
router.use("/grupos", gruposRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
