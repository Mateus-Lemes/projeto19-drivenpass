import Cryptr from "cryptr";
import { createWifi, Wifis } from "../Repositories/wifiRepositories.js";
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