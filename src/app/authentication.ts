import { AccountDevice, Client, Session } from "@heroiclabs/nakama-js"
import { v4 } from "uuid"

export default class Authentication {

    authenticate(): Promise<Session> {
        const client = new Client("defaultKey", "127.0.0.1", "7350");
        const device: AccountDevice = { create: true, id: v4() };
        return client.authenticateDevice(device)
    }
}