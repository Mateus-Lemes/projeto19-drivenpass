import { Request, Response } from "express";
import { createWifiService, getWifiService } from "../Services/wifiServices.js";

export async function createWifiController(req: Request, res: Response) {
    
    await createWifiService(req.body, res.locals.user.id);

    res.sendStatus(201);
}

export async function getWifiController(req: Request, res: Response) {

    const wifi = await getWifiService(res.locals.user.id, +req.query.id);

    res.status(200).send(wifi);
}