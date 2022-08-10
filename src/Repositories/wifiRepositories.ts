import { Wifi } from "@prisma/client"
import prisma from "../config/db.js"

export type Wifis = Partial<Wifi>
export type NewWifi = Omit<Wifi, "id">

export async function createWifi(wifi: NewWifi) {
    await prisma.wifi.create({
        data: wifi
    })
}