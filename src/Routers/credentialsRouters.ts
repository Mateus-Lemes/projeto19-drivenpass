import { Router } from "express";
import { createCredentialController } from "../Controllers/credentialsControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { credentialSchema } from "../Schemas/credentialsSchema.js";

const credentialsRouters = Router();

credentialsRouters.post("/credentials", authValidation, schemaValidation(credentialSchema), createCredentialController)

export default credentialsRouters;