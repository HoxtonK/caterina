import Authentication from "app/authentication"
import { Session } from "@heroiclabs/nakama-js"
import { assert } from "console";

it("authenticates using device id", () => {
    let auth = new Authentication();

    return auth.authenticate().then(session => {
        expect(session).toBeDefined();
    })
}, 1000);


