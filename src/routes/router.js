import { Router } from "express";
import gruposRouter from "./gruposRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import testeRouter from "./taskRouter.js";
import sessionRouter from "./sessionRouter.js";

const router = Router();

router.use("/test", testeRouter);
router.use("/grupos", gruposRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/session", sessionRouter);

export default router;
