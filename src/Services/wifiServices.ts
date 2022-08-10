import Cryptr from "cryptr";
import { createWifi, Wifis, findWifiByUserId, findWifiByUserIdAndId } from "../Repositories/wifiRepositories.js";
const cryptr = new Cryptr(process.env.SECRET_KEY);

export async function createWifiService(wifi: Wifis, userId: number) {
    const {wifiTitle, wifiName, wifiPassword} = wifi
    
    const lastWifi = {
        wifiTitle,
        wifiName,
        wifiPassword: cryptr.encrypt(wifiPassword),
        userId
    }

    await createWifi(lastWifi)
}

export async function getWifiService(userId: number, id: number) {
    if(isNaN(id)) {
        const wifi = await findWifiByUserId(userId)
        if (!wifi) {
            throw {
                type: "not found",
                message: "não existe nenhum wifi"
            }
        }
        
        let wifiArray = []
            wifi.forEach((wifi:any) => {
                let objectWifi = {...wifi, wifiPassword: cryptr.decrypt(wifi.wifiPassword)}
                wifiArray = [...wifiArray, objectWifi]
            })
        
        return wifiArray
    }

        const wifi = await findWifiByUserIdAndId(userId, id)
        if (!wifi) {
            throw {
                type: "not found",
                message: "não existe nenhum wifi"
            }
        }
        const objectWifi = {...wifi, wifiPassword: cryptr.decrypt(wifi.wifiPassword)}
        return objectWifi
}