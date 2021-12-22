export class Order {
    public products: number[]
    public state: string
    readonly total: number

    constructor(products: number[], state: string){
        this.products = products
        this.state = state
        this.total = this.sumPrices()
    }

    private sumPrices(): number {
        return this.products.reduce((a, b) => a + b, 0)
    }
}
