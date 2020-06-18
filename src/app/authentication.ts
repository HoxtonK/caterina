import { AccountDevice, Client, Session } from "@heroiclabs/nakama-js"
import { v4 } from "uuid"

export default class Authentication {

    authenticate(): Promise<void | Session> {
        const client = new Client("defaultkey", "127.0.0.1", "7350");
        const device: AccountDevice = { create: true, id: v4() };
        return client.authenticateDevice(device);
    }
}