import {IProduceData} from "../models/Product.js";
import {AppError} from "../utils/errorHandler.js";

interface IProductsApiResponse {
    products: IProduceData [];
    total:number;
    skip:number;
    limit:number;
}
const 