import joi from "joi";

export const credentialSchema = joi.object({
    credentialTitle: joi.string().required(),
    url: joi.string().required(),
    credentialUser: joi.string().required(),
    credentialPassword: joi.string().required()
});