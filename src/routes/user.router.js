import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import GlobalMiddleware from "../middlewares/global.middleware.js";

const userRouter = Router();

userRouter.post("/created", UserController.createUserController);

userRouter.use(AuthMiddleware.validTokenhMiddleware);
userRouter.get("/", UserController.findAllUserController);
userRouter.get("/findById/:id?", UserController.findUserByIdController);

userRouter.use(GlobalMiddleware.validId);
userRouter.patch("/update/:id", UserController.updateUserController);

export default userRouter;
