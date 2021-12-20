import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {

    test ('tax UT is apply to total for a product', () => {
        const ut_tax = 0.0685
        let billCalculator: BillCalculator = new BillCalculator()
        let totalBill: number = billCalculator.calculateBill(1,100)
        expect(totalBill).toBe(100 * ut_tax)
    });
})