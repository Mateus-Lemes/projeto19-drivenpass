import { Request, Response } from "express";
import { createWifiService } from "../Services/wifiServices.js";

export async function createWifiController(req: Request, res: Response) {
    
    await createWifiService(req.body, res.locals.user.id);

    res.sendStatus(201);
}