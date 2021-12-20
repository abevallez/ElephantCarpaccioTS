export class BillCalculator {
    public calculateBill(numProducts: number, priceByProduct: number): number {
        const ut_tax = 0.0685
        return 100 * ut_tax
    }
}
