import { Router } from "express";
import { createWifiController, getWifiController /*deleteWifiController */} from "../Controllers/wifiControllers.js";
import { authValidation } from "../Middlewares/authValidation.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { wifiSchema } from "../Schemas/wifiSchema.js";

const wifiRouters = Router();

wifiRouters.post("/wifi", authValidation, schemaValidation(wifiSchema), createWifiController)
wifiRouters.get("/wifi", authValidation, getWifiController)
wifiRouters.delete("/wifi/:id", authValidation, /*deleteWifiController*/)

export default wifiRouters