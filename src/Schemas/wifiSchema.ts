import joi from "joi";

export const wifiSchema = joi.object({
    wifiTitle: joi.string().required(),
    wifiName: joi.string().required(),
    wifiPassword: joi.string().required()
})