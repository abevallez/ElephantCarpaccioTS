import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {

    let billCalculator: BillCalculator
    const ut_tax = 0.0685

    beforeEach(() => {
        billCalculator = new BillCalculator()
    })

    test.each([
        [[100]],
        [[50]],
        [[40]],
    ]) ('tax UT is applied to total for 1 product < 1000$', (prices) => {
        let totalBill: number = billCalculator.calculateBill(prices.length, prices, 'UT')
        expect(totalBill).toBe(sumPrices(prices) * ut_tax)
    });
    
    test('discount 3% and UT tax is applied when total > 1000$',() => {
        let prices: number[] = [1456]
        const discount = 0.03

        let totalBill: number = billCalculator.calculateBill(prices.length, prices, 'UT')
        let totalExpected: number = (sumPrices(prices) * discount) * ut_tax

        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product < 1000$', () => {
        let prices: number[] = [50, 50]

        let totalBill: number = billCalculator.calculateBill(prices.length, prices, 'UT')
        let totalExpected: number = sumPrices(prices) * ut_tax

        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product > 1000$', () => {
        let prices: number[] = [600, 600]
        const discount = 0.03

        let totalBill: number = billCalculator.calculateBill(prices.length, prices, 'UT')
        let totalExpected: number = (sumPrices(prices) * discount) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, differentes prices by product < 1000$', () => {
        let prices: number[] = [300, 50]
        const discount = 0.03
        let totalBill: number = billCalculator.calculateBill(prices.length, prices, 'UT')
        let totalExpected: number = sumPrices(prices) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });
})

function sumPrices(prices: number[]) {
    return prices.reduce((a, b) => a + b, 0);
}
