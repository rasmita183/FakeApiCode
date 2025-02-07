const zest = require('zest');

zest.describe("Get All Carts", function () {
    zest.it("Valid Request: Fetch all carts", async function () {
        const response = await zest.get('https://fakestoreapi.com/carts');
        zest.expect(response.status).toBe(200);
        zest.expect(response.body).toBeArray();
    });
});
