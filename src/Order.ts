export class Order {
    public products: number[]
    public state: string 

    constructor(products: number[], state: string){
        this.products = products
        this.state = state
    }

    sumPrices(): number {
        return this.products.reduce((a, b) => a + b, 0)
    }
}
