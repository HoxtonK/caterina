
import { AccountDevice, Client, Session } from "@heroiclabs/nakama-js"


const client = new Client("defaultKey", "127.0.0.1", "7350");
const clientId: string = window.crypto.getRandomValues(new Uint8Array(8)).join();
const device: AccountDevice = { create: true, id: clientId };

let session: Session;

client.authenticateDevice(device)
  .then(s => session = s)
  .catch(e => console.log(`Authentication error: ${e}`));
