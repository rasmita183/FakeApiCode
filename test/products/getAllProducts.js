const zest = require('zest');

zest.describe("Get All Products", function () {
    zest.it("Valid Request: Fetch all products", async function () {
        const response = await zest.get('https://fakestoreapi.com/products');
        zest.expect(response.status).toBe(200);
        zest.expect(response.body).toBeArray();
    });

    zest.it("Performance Test: Fetch all products multiple times", async function () {
        let startTime = Date.now();
        for (let i = 0; i < 10; i++) {
            const response = await zest.get('https://fakestoreapi.com/products');
        }
        let endTime = Date.now();
        let duration = (endTime - startTime) / 1000; // seconds
        zest.expect(duration).toBeLessThan(2);
    });
});
