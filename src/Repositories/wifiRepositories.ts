import { Wifi } from "@prisma/client"
import prisma from "../config/db.js"

export type Wifis = Partial<Wifi>
export type NewWifi = Omit<Wifi, "id">

export async function createWifi(wifi: NewWifi) {
    await prisma.wifi.create({
        data: wifi
    })
}

export async function findWifiByUserId(userId: number) {
    const wifi = await prisma.wifi.findMany({
        where: {
            userId
        }
    })
    return wifi
}

export async function findWifiByUserIdAndId(userId: number, id: number) {
    const wifi = await prisma.wifi.findFirst({
        where: {
            userId,
            id
        }
    })
    return wifi
}