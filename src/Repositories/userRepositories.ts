import { Users } from "@prisma/client"
import prisma from "../config/db.js"

export type User = Omit<Users, "id">

export async function findUserByEmail(email: string) {
    const user = await prisma.users.findFirst({
        where: {
            email
        }
    })

    return user;
}

export async function createUser(user: User) {
    await prisma.users.create({
        data: user
    })
}

export async function findById(id:number) {
    const user = await prisma.users.findFirst({
        where: {
            id
        }
    })
    return user;
}

