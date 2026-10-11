import {IProductData} from "../models/Product.js";
import {AppError} from "../utils/errorHandler.js";

interface IProductsApiResponse {
    products: IProductData [];
    total:number;
    skip:number;
    limit:number;
}
const BASE_URL ="https://dummyjson.com/products";

export async function fetchProducts(limit: number = 10): Promise<IProductData[]>{
    try{
        const response = await fetch(`${BASE_URL}?limit=${limit}`);

        if(!response.ok){
            throw new AppError(`Failed to fetch products: ${response.statusText}`, response.status);
        }
        const data = (await response.json()) as IProductsApiResponse;
        return data.products;
    }catch(error){
        if(error instanceof AppError){
            throw error;
        }
        throw new AppError(`Network error while fetching product : ${(error as Error).message}`, 500);
    }
}
export async function fetchProductById(id: number): Promise<IProductData> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new AppError(`Product with ID ${id} not found`, response.status);
    }

    const product = (await response.json()) as IProductData;
    return product;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(`Network error while fetching product ${id}: ${(error as Error).message}`, 500);
  }
}