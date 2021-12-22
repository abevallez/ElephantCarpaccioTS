import { Order } from '../src/Order'
import { BillCalculator } from '../src/BillCalculator'

describe('tests BillCalculator', () => {

    let billCalculator: BillCalculator

    beforeEach(() => {
        billCalculator = new BillCalculator()
    })

    test.each([
        ['UT', 0.0685],
        ['NV', 0.08],
        ['TX', 0.0625],
        ['AL', 0.04],
        ['CA', 0.0825]
    ])('Tax applied by estate without discount', (state: string, tax: number) => {
        let products: number[] = [300, 50]
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        expect(totalBill).toBe(order.total + (order.total * tax))
    })

    test.each([
        [[1456], 3],
        [[3000, 2500], 5]
    ])('when total > %i discount %i%', (products: number[], discount: number) => {
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let total_with_discount = order.total - (order.total * (discount/100))
        let totalExpected: number = total_with_discount + (total_with_discount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    })
    test('calculate total with many products, same price by product < 1000$', () => {
        let products: number[] = [50, 50]
        let state = 'UT'
        let order: Order = new Order(products, state)

       let totalBill: number = billCalculator.calculateBill(order)
        expect(totalBill).toBe(order.total + (order.total * BillCalculator.TAXES['UT']))
    });

    test('calculate total with many products, same price by product > 1000$', () => {
        let products: number[] = [600, 600]
        const discount = 0.03
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let total_with_discount = order.total - (order.total * discount)
        let totalExpected: number = total_with_discount + (total_with_discount * BillCalculator.TAXES['UT'])
    });

    test('calculate total with many products, differentes prices by product < 1000$', () => {
        let products: number[] = [300, 50]
        const discount = 0.03
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let total_with_discount = order.total - (order.total * discount)
        let totalExpected: number = total_with_discount + (total_with_discount * BillCalculator.TAXES['UT'])
    });
})
