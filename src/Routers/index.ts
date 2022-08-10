import { Router } from "express";
import credentialsRouters from "./credentialsRouters.js";
import secureNotesRouter from "./secureNotesRouters.js";
import userRouter from "./userRouters.js";

const router = Router();

router.use(userRouter);
router.use(credentialsRouters);
router.use(secureNotesRouter)

export default router;