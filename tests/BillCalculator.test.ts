import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {

    test.each([
        [100],
        [50],
        [40],
    ]) ('tax UT is applied to total for 1 product < 1000$', (price) => {
        const ut_tax = 0.0685
        let billCalculator: BillCalculator = new BillCalculator()
        let totalBill: number = billCalculator.calculateBill(1, price, 'UT')
        expect(totalBill).toBe(price * ut_tax)
    });
    
    test('discount 3% and UT tax is applied when total > 1000$',() => {
        const ut_tax = 0.0685
        const price = 1456
        let billCalculator: BillCalculator = new BillCalculator()
        let totalBill: number = billCalculator.calculateBill(1, price, 'UT')
        let totalExpected: number = (price * 0.03) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product < 1000$', () => {
        let billCalculator: BillCalculator = new BillCalculator()
        let numProducts: number = 2
        let price: number = 50
        const ut_tax = 0.0685
        let totalBill: number = billCalculator.calculateBill(numProducts, price, 'UT')
        let totalExpected: number = (price * numProducts) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product > 1000$', () => {
        let billCalculator: BillCalculator = new BillCalculator()
        let numProducts: number = 2
        let price: number = 600
        const ut_tax = 0.0685
        const discount = 0.03
        let totalBill: number = billCalculator.calculateBill(numProducts, price, 'UT')
        let totalExpected: number = ((price * numProducts) * discount) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });
})