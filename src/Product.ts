export class Product {
    public priceByUnit: number
    public quantity: number
    public readonly totalPrice: number

    constructor(priceByUnit: number, quantity: number) {
        this.priceByUnit = priceByUnit
        this.quantity = quantity
        this.totalPrice = priceByUnit * quantity
    }
}