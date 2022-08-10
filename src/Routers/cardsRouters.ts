import { Router } from "express";
import { createCardController, deleteCardController, getCardsController } from "../Controllers/cardsControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { cardsSchema } from "../Schemas/cardsSchema.js";

const cardsRouters = Router();

cardsRouters.post("/cards", authValidation, schemaValidation(cardsSchema), createCardController)
cardsRouters.get("/cards", authValidation, getCardsController)
cardsRouters.delete("/cards/:id", authValidation, deleteCardController)

export default cardsRouters