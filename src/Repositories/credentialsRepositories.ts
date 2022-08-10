import { Credentials } from "@prisma/client";
import prisma from "../config/db.js";


export type Credential = Partial<Credentials>
export type NewCredential = Omit<Credentials, "id">

export async function findCredentialByUserIdAndTitle(userId: number, credentialTitle: string, id: number) {

    if(credentialTitle === "" && isNaN(id)) {
        const credential = await prisma.credentials.findMany({
            where: {
                userId
            }
        })
        return credential
    }

    if(credentialTitle === "" && !isNaN(id) ) {
        const credential = await prisma.credentials.findFirst({
            where: {
                userId,
                id
            }
        })
        return credential
    }

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

export async function deleteCredential(id: number) {
    await prisma.credentials.delete({
        where: {
            id
        }
    })
}

export async function findCredentialById(id: number) {
    const credential = await prisma.credentials.findFirst({
        where: {
            id
        }
    })
    return credential
}