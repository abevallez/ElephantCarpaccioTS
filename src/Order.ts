import { Product } from "./Product"

export class Order {
    public products: Product[]
    public state: string
    public readonly total: number

    constructor(products: Product[], state: string){
        this.products = products
        this.state = state
        this.total = this.sumPrices()
    }

    private sumPrices(): number {
        let totalSum = 0
        this.products.forEach(product => {
            totalSum += product.totalPrice
        });{  
        }
        return totalSum
    }
}
