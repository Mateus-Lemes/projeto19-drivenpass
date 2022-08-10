import { Router } from "express";
import { createCredentialController, deleteCredentialController, getCredentialsController } from "../Controllers/credentialsControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { credentialSchema } from "../Schemas/credentialsSchema.js";

const credentialsRouters = Router();

credentialsRouters.post("/credentials", authValidation, schemaValidation(credentialSchema), createCredentialController);
credentialsRouters.get("/credentials", authValidation, getCredentialsController);
credentialsRouters.delete("/credentials/:id", authValidation, deleteCredentialController)

export default credentialsRouters;