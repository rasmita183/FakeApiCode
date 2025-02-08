const zest = require('zest');
   // Test - Fetch all products
zest.describe("Get All Products", function () {
    zest.it("Valid Request: Fetch all products", async function () {
        const response = await zest.get('https://fakestoreapi.com/products');
        zest.expect(response.status).toBe(200);
        zest.expect(response.body).toBeArray();
    });
});
