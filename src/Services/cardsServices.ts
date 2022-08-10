import Cryptr from "cryptr";
import { Card, createCard, deleteCard, findCardById, findCardByUserIdAndId, findCardByUserIdAndTitle, findCardsByUserId } from "../Repositories/cardsRepositories.js";
const cryptr = new Cryptr(process.env.SECRET_KEY);

export async function createCardService(card: Card, userId: number) {
    const {cardTitle, cardNumber, printedName, securityCode, expirationDate, cardPassword, virtual, debit, credit} = card
    
    const lastCard = {
        cardTitle,
        cardNumber,
        printedName,
        securityCode: cryptr.encrypt(securityCode),
        expirationDate,
        cardPassword: cryptr.encrypt(cardPassword),
        virtual,
        debit,
        credit,
        userId
    }

    const cardExist = await findCardByUserIdAndTitle(userId, cardTitle);

    if(cardExist) {
        throw {
            type: "conflict",
            message: "Já existe um cartão com este título"
        }
    }
    await createCard(lastCard)
}

export async function getCardsService(userId: number, id: number) {
    if(isNaN(id)) {
        const cards = await findCardsByUserId(userId)
        if (!cards) {
            throw {
                type: "not found",
                message: "não existe nenhum cartão"
            }
        }
        
        let cardsArray = []
            cards.forEach((card:any) => {
                let objectCards = {...card, cardPassword: cryptr.decrypt(card.cardPassword), securityCode: cryptr.decrypt(card.securityCode)}
                cardsArray = [...cardsArray, objectCards]
            })
        
        return cardsArray
    }

        const card = await findCardByUserIdAndId(userId, id)
        if (!card) {
            throw {
                type: "not found",
                message: "não existe nenhum cartão"
            }
        }
        const objectCard = {...card, cardPassword: cryptr.decrypt(card.cardPassword)}
        return objectCard
}

export async function deleteCardService(id: number) {
    const card:any = await findCardById(id)

    if(!card) {
        throw {
            type: "not found",
            message: "Não existe este cartão para ser excluído"
        }
    }
    await deleteCard(id);
}