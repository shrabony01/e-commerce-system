import { Product } from "./models/Product.js";
import { fetchProducts, fetchProductById } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";

async function main(): Promise<void> {
  console.log("==================================================");
  console.log("   E-COMMERCE PRODUCT MANAGEMENT SYSTEM START     ");
  console.log("==================================================\n");

  try{
    console.log("--- Fetching Products from API ---");
    const rawProducts = await fetchProducts(5);

    const productInstances: Product[] = rawProducts.map((data) => new Product(data));
    console.log(`Successfully retrieved ${productInstances.length} products.\n`);

    for (const product of productInstances){
        product.displayDetails();

        const discountedPrice = product.getPriceWithDiscount();
      const taxAmount = calculateTax(discountedPrice, product.category);
      const finalPriceWithTax = Number((discountedPrice + taxAmount).toFixed(2));

      console.log(`[Order Breakdown for "${product.title}"]`);
      console.log(`  Discounted Subtotal: $${discountedPrice.toFixed(2)}`);
      console.log(`  Tax (${product.category.toLowerCase() === "groceries" ? "3%" : "4.75%"}): $${taxAmount.toFixed(2)}`);
      console.log(`  Final Total:         $${finalPriceWithTax.toFixed(2)}`);
      console.log("----------------------------------------\n");
    }
  }catch(error){
    handleError(error);
  }

  console.log("--- Testing Error Handling (Requesting Non-Existent Product) ---");
  try{
    await fetchProductById(99999);
  } catch(error){
    console.log("Caught expected error gracefully:");
    handleError(error);
  }
  console.log("\n==================================================");
  console.log("           SYSTEM EXECUTION FINISHED              ");
  console.log("==================================================");
}
main();
