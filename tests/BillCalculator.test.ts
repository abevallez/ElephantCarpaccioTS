import { Order } from '../src/Order'
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
    ]) ('tax UT is applied to total for 1 product < 1000$', (products: number[]) => {
        let state = 'UT'
        let order: Order = new Order(products, state)
        let totalBill: number = billCalculator.calculateBill(order)
        expect(totalBill).toBe(order.total * ut_tax)
    });
    
    test('discount 3% and UT tax is applied when total > 1000$',() => {
        let products: number[] = [1456]
        const discount = 0.03
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalExpected: number = (order.total * discount) * ut_tax

        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product < 1000$', () => {
        let products: number[] = [50, 50]
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalExpected: number = order.total * ut_tax

        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product > 1000$', () => {
        let products: number[] = [600, 600]
        const discount = 0.03
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalExpected: number = (order.total * discount) * ut_tax
        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, differentes prices by product < 1000$', () => {
        let products: number[] = [300, 50]
        const discount = 0.03
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalExpected: number = order.total * ut_tax
        expect(totalBill).toBe(totalExpected)
    });
})
