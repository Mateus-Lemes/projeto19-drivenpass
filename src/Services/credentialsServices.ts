import { createCredential, Credential, deleteCredential, findCredentialById, findCredentialByUserIdAndTitle } from "../Repositories/credentialsRepositories.js";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.SECRET_KEY);

export async function createCredentialService(credential: Credential, userId: number) {
    const {credentialTitle, url, credentialUser, credentialPassword} = credential
    
    const lastCredential = {
        credentialTitle,
        url,
        credentialUser,
        credentialPassword: cryptr.encrypt(credentialPassword),
        userId
    }
    const credentialExist = await findCredentialByUserIdAndTitle(userId, credentialTitle, null);
    if(credentialExist) {
        throw {
            type: "conflict",
            message: "está credencial já existe"
        }
    }
    await createCredential(lastCredential);
}

export async function getCredentialsService(userId: number, id: number) {

    const credentials:any = await findCredentialByUserIdAndTitle(userId, "", id);
    if (!credentials) {
        throw {
            type: "not found",
            message: "não existe credencial"
        }
    }
    if(credentials.length > 0) {
        let credentialsArray = []
            credentials.forEach((credential:any) => {
                let objectCredential = {...credential, credentialPassword: cryptr.decrypt(credential.credentialPassword)}
                credentialsArray = [...credentialsArray, objectCredential]
            })
        return credentialsArray;
    }
    const objectCredential = {...credentials, credentialPassword: cryptr.decrypt(credentials.credentialPassword)}
    return objectCredential
}

export async function deleteCredentialService(id: number) {
    const credential:any = await findCredentialById(id)

    if(!credential) {
        throw {
            type: "not found",
            message: "Não existe esta credential para ser excluída"
        }
    }
    await deleteCredential(id);
}