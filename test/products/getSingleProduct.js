const zest = require('zest');
 // Test - Fetch Single Product Valid
zest.describe("Get a Single Product", function () {
    zest.it("Valid Request: Fetch product by ID", async function () {
        const response = await zest.get('https://fakestoreapi.com/products/1');
        zest.expect(response.status).toBe(200);
        zest.expect(response.body).toHaveProperty('id', 1);
    });
   // Test - Fetch Single Product Invalid with numeric data
    zest.it("Invalid Product ID: Request a non-existent product", async function () {
        const response = await zest.get('https://fakestoreapi.com/products/9999');
        zest.expect(response.status).toBe(404);
        zest.expect(response.body).toHaveProperty('error', 'Product not found');
    });
 // Test - Fetch Single Product Invalid with Alpha numeric data
    zest.it("Invalid Input Type: Use non-numeric ID", async function () {
        const response = await zest.get('https://fakestoreapi.com/products/abc');
        zest.expect(response.status).toBe(400);
        zest.expect(response.body).toHaveProperty('error', 'Invalid ID');
    });
});
