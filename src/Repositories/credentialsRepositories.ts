import { Credentials } from "@prisma/client";
import prisma from "../config/db.js";


export type Credential = Partial<Credentials>
export type NewCredential = Omit<Credentials, "id">

export async function findCredentialByUserId(userId:number, credentialTitle: string) {
    const credential = await prisma.credentials.findFirst({
        where: {
            userId,
            credentialTitle
        }
    })
    return credential;
}

export async function createCredential(credential: NewCredential) {
    
    await prisma.credentials.create({
        data: credential
    })
}