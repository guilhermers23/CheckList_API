import { Router } from "express";
import userController from "../controllers/user.controller.js";
import AuthMiddleware from "../middlewares/Auth.Middleware.js";
import globalMiddleware from "../middlewares/global.middleware.js";

const userRouter = Router();

userRouter.post("/created", userController.createUserController);

userRouter.use(AuthMiddleware.validTokenhMiddleware);
userRouter.get("/", userController.findAllUserController);
userRouter.get("/findById/:id?", userController.findUserByIdController);

userRouter.use(globalMiddleware.validId);
userRouter.patch("/update/:id", userController.updateUserController);

export default userRouter;
