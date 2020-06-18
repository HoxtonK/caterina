import Authentication from "app/authentication"

/**
 * @group network-up
 */
it("authenticates using device id", () => {
    let auth = new Authentication();

    return auth.authenticate().then(session => {
        expect(session).toBeDefined();
    })
}, 1000);