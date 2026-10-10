export function calculateTax(price:number,category:string):number{
    if(price<0){
        return 0;
    }

    //3% for groceries,4.75% for everything else
    let taxRate;
    if (category.toLowerCase()==='groceries'){
        taxRate=0.03;
    }else{
        taxRate=0.0475;
    }
    const taxAmount=price*taxRate;
    return Number(taxAmount.toFixed(2));

}