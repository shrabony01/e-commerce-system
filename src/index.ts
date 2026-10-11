import { Product } from "./models/Product.js";
import { fetchProducts, fetchProductById } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";