import joi from "joi";

export const secureNoteSchema = joi.object ({
    secureNoteTitle: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
})