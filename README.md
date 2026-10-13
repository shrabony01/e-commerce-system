# E-Commerce Product Management System
A simple TypeScript command-line app that fetches products from an online store API, calculates discounts and taxes, and prints the details to the console.

# Features
Product Class (Product.ts): Stores product details and handles tasks like calculating discounted prices and printing product cards.

Fetching API Data (apiService.ts): Uses fetch with async/await to get live product data from the DummyJSON API.

Price Calculators (discountCalculator.ts & taxCalculator.ts):

Calculates the dollar amount saved from a percentage discount.

Adds sales tax based on category (3% for groceries, 4.75% for other items).

Error Handling (errorHandler.ts): Uses a custom AppError class to catch network problems (like a 404 missing product) and show clear messages instead of crashing.

TypeScript Setup: Built using ES Modules (NodeNext) with interfaces to ensure all data types stay consistent and error-free.