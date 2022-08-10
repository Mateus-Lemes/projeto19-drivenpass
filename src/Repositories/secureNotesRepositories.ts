import { SecureNotes } from "@prisma/client";
import prisma from "../config/db.js";


export type SecureNote = Partial<SecureNotes>
export type NewSecureNote = Omit<SecureNotes, "id">

export async function findSecureNoteByUserIdAndTitle(userId: number, secureNoteTitle: string) {
    const secureNote = await prisma.secureNotes.findFirst({
        where: {
            userId,
            secureNoteTitle
        }
    })
    return secureNote
}

export async function createSecureNote(secureNote: NewSecureNote) {
    await prisma.secureNotes.create({
        data: secureNote
    })
}

export async function findSecureNoteByUserId(userId: number) {
    const secureNotes = await prisma.secureNotes.findMany({
        where: {
            userId
        }
    })
    return secureNotes
}

export async function findSecureNoteByUserIdAndId(userId: number, id: number) {
    const secureNote = await prisma.secureNotes.findFirst({
        where: {
            userId,
            id
        }
    })
    return secureNote
}