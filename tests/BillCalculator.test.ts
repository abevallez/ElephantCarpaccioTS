import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {
    test ('total is the price of a product', () => {
        let billCalculator: BillCalculator= new BillCalculator()
        let totalBill: number = billCalculator.calculateBill(1,100)
        expect(totalBill).toBe(100)
    });
})