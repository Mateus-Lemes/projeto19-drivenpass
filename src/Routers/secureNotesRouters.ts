import { Router } from "express";
import { createSecureNoteController, getSecureNotes } from "../Controllers/secureNotesControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { secureNoteSchema } from "../Schemas/secureNotesSchema.js";

const secureNotesRouter = Router();

secureNotesRouter.post("/notes", authValidation, schemaValidation(secureNoteSchema), createSecureNoteController);
secureNotesRouter.get("/notes", authValidation, getSecureNotes);
secureNotesRouter.delete("/notes/:id", authValidation, );

export default secureNotesRouter;