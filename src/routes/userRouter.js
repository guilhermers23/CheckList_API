import { Router } from "express";
import UserController from "../controllers/userController.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";
import GlobalMiddleware from "../middlewares/globalMiddleware.js";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/created", UserController.createUserController);

userRouter.use(AuthMiddleware.validTokenhMiddleware);
userRouter.get("/", UserController.findAllUserController);
userRouter.get("/findById/:id?", UserController.findUserByIdController);

userRouter.use(GlobalMiddleware.validId);
userRouter.patch("/update/:id", UserController.updateUserController);
userRouter.delete("/:id/delete", userController.excluirUser);

export default userRouter;
