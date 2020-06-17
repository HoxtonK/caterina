import Authentication from "app/authentication"
import { assert } from "console";

it("authenticates using device id", () => {
    let auth = new Authentication();
    expect(auth.authenticate());
}, 5000)

