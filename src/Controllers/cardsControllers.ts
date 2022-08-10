import { Request, Response } from "express";
import { createCardService, deleteCardService, getCardsService } from "../Services/cardsServices.js";

export async function createCardController(req: Request, res: Response) {
    
    await createCardService(req.body, res.locals.user.id);

    res.sendStatus(201);
}

export async function getCardsController(req: Request, res: Response) {

    const card = await getCardsService(res.locals.user.id, +req.query.id);

    res.status(200).send(card);
}

export async function deleteCardController(req: Request, res: Response) {
    await deleteCardService(+req.params.id)

    res.sendStatus(200)
}