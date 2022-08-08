import { createCredential, Credential, findCredentialByUserId } from "../Repositories/credentialsRepositories.js";
import Cryptr from "cryptr";


export async function createCredentialService(credential: Credential, userId: number) {
    const {credentialTitle, url, credentialUser, credentialPassword} = credential
    
    const cryptr = new Cryptr(process.env.SECRET_KEY);
    const lastCredential = {
        credentialTitle,
        url,
        credentialUser,
        credentialPassword: cryptr.encrypt(credentialPassword),
        userId
    }
    const credentialExist = await findCredentialByUserId(userId, credentialTitle);
    if(credentialExist) {
        throw {
            type: "conflict",
            message: "está credencial já existe"
        }
    }
    await createCredential(lastCredential);
}