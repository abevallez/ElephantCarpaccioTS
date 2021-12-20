import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {

    test.each([
        [100],
        [50],
        [40],
        [1456]
    ]) ('tax UT is apply to total for a product', (price) => {
        const ut_tax = 0.0685
        let billCalculator: BillCalculator = new BillCalculator()
        let totalBill: number = billCalculator.calculateBill(1, price)
        expect(totalBill).toBe(price * ut_tax)
    });
})