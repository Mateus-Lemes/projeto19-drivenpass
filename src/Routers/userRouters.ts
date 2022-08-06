import { Router } from "express";
import { signInController, signUpController } from "../Controllers/userControllers.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { userSchema } from "../Schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signup", schemaValidation(userSchema), signUpController);
userRouter.post("/signin", schemaValidation(userSchema), signInController)

export default userRouter;