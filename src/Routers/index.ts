import { Router } from "express";
import cardsRouters from "./cardsRouters.js";
import credentialsRouters from "./credentialsRouters.js";
import secureNotesRouter from "./secureNotesRouters.js";
import userRouter from "./userRouters.js";

const router = Router();

router.use(userRouter);
router.use(credentialsRouters);
router.use(secureNotesRouter);
router.use(cardsRouters)

export default router;