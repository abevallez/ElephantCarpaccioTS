export class BillCalculator {
    public calculateBill(numProducts: number, priceByProduct: number, estate: string): number {
        const ut_tax = 0.0685
        let total = priceByProduct * numProducts
        if (total > 1000)
            total = total * 0.03
        return total * ut_tax
    }
}
