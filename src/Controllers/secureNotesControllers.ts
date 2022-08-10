import { Request, Response } from "express";
import { createSecureNoteService, getSecureNotesService } from "../Services/SecureNotesServices.js";


export async function createSecureNoteController(req: Request, res: Response) {
    
    await createSecureNoteService(req.body, res.locals.user.id);

    res.sendStatus(201);
}

export async function getSecureNotes(req: Request, res: Response) {
    const secureNote = await getSecureNotesService(res.locals.user.id, +req.query.id);

    res.status(200).send(secureNote);
}