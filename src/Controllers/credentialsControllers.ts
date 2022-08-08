import { Request, Response } from "express";
import { createCredentialService } from "../Services/credentialsServices.js";

export async function createCredentialController(req: Request, res: Response) {
    
    await createCredentialService(req.body, res.locals.user.id);

    res.sendStatus(201);
}