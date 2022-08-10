import joi, { number } from "joi";

export const cardsSchema = joi.object({
    cardTitle: joi.string().required(),
    cardNumber: joi.string().min(13).max(16).required(),
    printedName: joi.string().required(),
    securityCode: joi.string().required(),
    expirationDate: joi.string().required(),
    cardPassword: joi.string().required(),
    virtual: joi.boolean().required(),
    debit: joi.boolean().required(),
    credit: joi.boolean().required()
})