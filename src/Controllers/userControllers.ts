import { Request, Response } from "express";
import { User } from "../Repositories/userRepositories.js";
import { signInService, signUpService } from "../Services/userServices.js";

export async function signUpController(req: Request, res: Response) {
    const body:User = req.body

    await signUpService(body);

    res.sendStatus(201);
}

export async function signInController(req: Request, res: Response,) {
    const body:User = req.body;

    const token = await signInService(body);

    res.send(token).status(200);
}
