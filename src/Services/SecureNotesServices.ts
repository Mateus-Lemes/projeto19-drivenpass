import { createSecureNote, findSecureNoteByUserId, findSecureNoteByUserIdAndId, findSecureNoteByUserIdAndTitle, SecureNote } from "../Repositories/secureNotesRepositories.js";


export async function createSecureNoteService(secureNote: SecureNote, userId: number) {

    const secureNoteExist = await findSecureNoteByUserIdAndTitle(userId, secureNote.secureNoteTitle);

    if(secureNoteExist) {
        throw {
            type: "conflict",
            message: "Já existe uma nota com este título"
        }
    }
    const newSecureNote:any = {...secureNote, userId}
    await createSecureNote(newSecureNote)
}

export async function getSecureNotesService(userId: number, id: number) {
    if(isNaN(id)) {
        const secureNotes = await findSecureNoteByUserId(userId)
        if (!secureNotes) {
            throw {
                type: "not found",
                message: "não existe nota"
            }
        }
        return secureNotes
    } 
        const secureNote = await findSecureNoteByUserIdAndId(userId, id)
        if (!secureNote) {
            throw {
                type: "not found",
                message: "não existe nota"
            }
        }
        return secureNote
}