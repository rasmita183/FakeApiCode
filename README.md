Project Name: API Test Automation with Zest Fake Store API

Description
This project focuses on automating API tests for various endpoints using Zest, a JavaScript-based testing framework. It covers product, cart, and user APIs, ensuring their functionality, performance, and handling of edge cases.

Table of Contents
Installation
Usage
Folder Structure
Test Cases
Installation
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/rasmita183/JestApiCode.git
cd JestApiCode
Install dependencies:

This project requires Node.js and Zest for testing. Install all necessary dependencies by running:

bash
Copy
Edit
npm install
Zest Plugin: Ensure the Zest plugin is installed in IntelliJ IDEA to run the tests.

Usage
Once dependencies are installed, you can write test cases inside the test/ folder. The tests are categorized based on API types:

Product API tests: Located in test/cart/
Cart API tests: Located in test/login/
User API tests: Located in test/products/
After writing test cases, follow the instructions in the Running Tests section to execute them.

Folder Structure
bash
Copy
Edit
/test
  ├── cart/  # Contains test cases for cart -related APIs
  ├── login/     # Contains test cases for login-related APIs
  ├── products/     # Contains test cases for products-related APIs
README.md        # Project documentation
Test Cases
Each test case is written in a separate JavaScript file, ensuring APIs function correctly under different scenarios, including:

Valid requests
Handling of invalid inputs
This automation ensures API reliability and robustness.
