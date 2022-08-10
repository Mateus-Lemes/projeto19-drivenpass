import { Request, Response } from "express";
import { createCredentialService, deleteCredentialService, getCredentialsService } from "../Services/credentialsServices.js";

export async function createCredentialController(req: Request, res: Response) {
    
    await createCredentialService(req.body, res.locals.user.id);

    res.sendStatus(201);
}

export async function getCredentialsController(req: Request, res: Response) {

    const credential = await getCredentialsService(res.locals.user.id, +req.query.id);

    res.status(200).send(credential);
}

export async function deleteCredentialController(req: Request, res: Response) {
    await deleteCredentialService(+req.params.id)

    res.sendStatus(200)
}