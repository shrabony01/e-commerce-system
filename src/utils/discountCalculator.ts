//calculate the doller discount amount for a product
export function calculateDiscount(price:number,discountPercentage:number):number{
    if (price<0 || discountPercentage<0){
        return 0;
    }
    const discountAmount = (price * discountPercentage)/100;
    return Number(discountAmount.toFixed(2));
}