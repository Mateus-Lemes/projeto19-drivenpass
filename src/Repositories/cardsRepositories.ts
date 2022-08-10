import { Cards } from "@prisma/client"
import prisma from "../config/db.js"

export type Card = Partial<Cards>
export type NewCards = Omit<Cards, "id">

export async function findCardByUserIdAndTitle(userId: number, cardTitle: string) {
    const card = await prisma.cards.findFirst({
        where: {
            userId,
            cardTitle
        }
    })
    return card
}

export async function createCard(card: NewCards) {
    await prisma.cards.create({
        data: card
    })
}

export async function findCardsByUserId(userId: number) {
    const cards = await prisma.cards.findMany({
        where: {
            userId
        }
    })
    return cards
}

export async function findCardByUserIdAndId(userId: number, id: number) {
    const card = await prisma.cards.findFirst({
        where: {
            userId,
            id
        }
    })
    return card
}

export async function deleteCard(id: number) {
    await prisma.cards.delete({
        where: {
            id
        }
    })
}

export async function findCardById(id: number) {
    const card = await prisma.cards.findFirst({
        where: {
            id
        }
    })
    return card
}