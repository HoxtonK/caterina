import Authentication from "app/authentication"
import { VirtualConsole } from 'jsdom';

/**
 * @group network-down
 */
it("error rejects with inactive network", () => {
    let auth = new Authentication();
    return expect(auth.authenticate())
        .rejects.toMatchObject(TypeError("Network request failed"));
}, 1000);