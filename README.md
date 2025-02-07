Project Name: API Test Automation with Zest
Description
This project is designed to automate API tests for various endpoints using Zest, a JavaScript-based testing framework. It focuses on testing product, cart, and user APIs, verifying functionality, performance, and edge cases.

Table of Contents
Installation
Usage
Folder Structure
Test Cases
Running Tests
Contributing
License
Installation
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/rasmita183/JestApiCode.git
cd JestApiCode
Install dependencies:

This project uses Node.js and Zest for testing. Run the following command to install all the required dependencies:

bash
Copy
Edit
npm install
Zest Plugin: Ensure that the Zest Plugin is installed in IntelliJ IDEA for running the tests.

Usage
Once the dependencies are installed, you can write your test cases in the test/ folder. The tests are structured based on the type of API (e.g., products, carts, users).

Products tests are located in test/products/.
Carts tests are located in test/carts/.
Users tests are located in test/users/.
After writing the tests, you can run them as described below.

Folder Structure
Here is an overview of the folder structure for the project:

bash
Copy
Edit
project-root
├── package.json            # Project dependencies and scripts
├── node_modules/           # Project dependencies
├── test
│   ├── products
│   │   ├── getAllProducts.js
│   │   └── getSingleProduct.js
│   ├── carts
│   │   └── getAllCarts.js
│   ├── users
│   │   └── loginUser.js
└── README.md               # Project documentation
Breakdown of Files:
package.json: Contains the project’s dependencies and configurations.
node_modules/: Folder containing installed node modules.
test/: Folder containing all test scripts, organized by feature:
products/: Contains test cases for product-related APIs.
carts/: Contains test cases for cart-related APIs.
users/: Contains test cases for user-related APIs.
README.md: Project documentation file (this file).
Test Cases
Each test case is written in a separate JavaScript file. The tests ensure that the APIs behave as expected, including handling valid requests, invalid inputs, and edge cases.
