import {IProduceData} from "../models/Product.js";
import {AppError} from "../utils/errorHandler.js";

interface IProductsApiResponse {
    products: IProduceData [];
    total:number;
    skip:number;
    limit:number;
}
const BASE_URL ="https://dummyjson.com/products";

export async function fetchProducts(limit:number=10); Promise<IProduceData[]>{
    try{
        const response = await fetch(`${BASE_URL}/${id}`);

        if(!Response.ok){
            throw new AppError(`Product with ID ${id} not found`, response.status);
        }
        const product = (await Response.json()) as IProduceData;
        return product;
    }catch(error){
        if(error instanceof AppError){
            throw error;
        }
        throw new AppError(`Network error while fetching product ${id}: ${(error as Error).message}`, 500);
    }
}