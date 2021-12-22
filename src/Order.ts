export class Order {
    public products: number[][]
    public state: string
    readonly total: number

    constructor(products: number[][], state: string){
        this.products = products
        this.state = state
        this.total = this.sumPrices()
    }

    private sumPrices(): number {
        let total_sum = 0
        for (let product in this.products) {
            total_sum += this.products[product][0] * this.products[product][1]
        }
        return total_sum
    }
}
