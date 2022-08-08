import { Router } from "express";
import credentialsRouters from "./credentialsRouters.js";
import userRouter from "./userRouters.js";

const router = Router();

router.use(userRouter);
router.use(credentialsRouters)

export default router;