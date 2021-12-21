export class BillCalculator {
    public calculateBill(numProducts: number, prices: number[], estate: string): number {
        const ut_tax = 0.0685
        let total = prices.reduce((a, b) => a + b, 0)
        if (total > 1000)
            total = total * 0.03
        return total * ut_tax
    }
}
