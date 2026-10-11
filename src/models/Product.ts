import { calculateDiscount } from "../utils/discountCalculator.js";

export interface IProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    stock: number;
    rating: number;
}
export class Product implements IProductData {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discountPercentage: number;
    public category: string;
    public stock: number;
    public rating: number;

    constructor(data: IProductData) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.category = data.category;
        this.stock = data.stock;
        this.rating = data.rating;
    }

    public getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    const finalPrice = this.price - discountAmount;
    return Number(finalPrice.toFixed(2));
  }
  
  public displayDetails(): void {
    const discountedPrice = this.getPriceWithDiscount();
    console.log(`========================================`);
    console.log(`[ID: ${this.id}] ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Original Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    console.log(`In Stock: ${this.stock} units | Rating: ${this.rating}/5`);
    console.log(`Description: ${this.description}`);
    console.log(`========================================\n`);
  }
}