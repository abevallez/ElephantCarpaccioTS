import { Order } from '../src/Order'
import { BillCalculator } from '../src/BillCalculator'
import { Product } from '../src/Product'

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
        let products: Product[] = [
            new Product(300,1),
            new Product(50,1)
        ]
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        expect(totalBill).toBe(order.total + (order.total * tax))
    })
    
    test('discount 3% when total > 1000$',() => {
        let products: Product[] = [new Product(1456, 1)]
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalWithDiscount = order.total - (order.total * 0.03)
        let totalExpected: number = totalWithDiscount + (totalWithDiscount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    });

    test('discount 5% when total > 5000', () => {
        let products: Product[] = [
            new Product(3000, 1),
            new Product(2500, 1)
        ]
        const discount = 0.05
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalWithDiscount = order.total - (order.total * 0.05)
        let totalExpected: number = totalWithDiscount + (totalWithDiscount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    })

    test('discount 7% when total > 7000$',() => {
        let products: Product[] = [
            new Product(3000, 1),
            new Product(4001, 1)
        ]
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalWithDiscount = order.total - (order.total * 0.07)
        let totalExpected: number = totalWithDiscount + (totalWithDiscount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    });

    test('discount 10% when total > 10000$',() => {
        let products: Product[] = [
            new Product(3000, 1),
            new Product(2500, 1),
            new Product(7000, 1)
        ]
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalWithDiscount = order.total - (order.total * 0.1)
        let totalExpected: number = totalWithDiscount + (totalWithDiscount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    });

    test('discount 15% when total > 15000$',() => {
        let products: Product[] = [
            new Product(3000, 1),
            new Product(2500, 1),
            new Product(17000, 1),
            new Product(4000, 1)
        ]
        let state = 'UT'
        let order: Order = new Order(products, state)

        let totalBill: number = billCalculator.calculateBill(order)
        let totalWithDiscount = order.total - (order.total * 0.15)
        let totalExpected: number = totalWithDiscount + (totalWithDiscount * BillCalculator.TAXES['UT'])

        expect(totalBill).toBe(totalExpected)
    });

    test('calculate total with many products, same price by product < 1000$', () => {
        let products: Product[] = [new Product(50, 2)]
        let state = 'UT'
        let order: Order = new Order(products, state)

       let totalBill: number = billCalculator.calculateBill(order)
        expect(totalBill).toBe(order.total + (order.total * BillCalculator.TAXES['UT']))
    });

    test('diferents quantities by product with diferents prices are accepted', () => {
        let products: Product[] = [
            new Product(50,2),
            new Product(100,5)
        ]
        let state = 'UT'
        let order: Order = new Order(products, state)
        let totalBill: number = billCalculator.calculateBill(order)
        let totalsum = (50 * 2) + (100 * 5)
        let totalExpected: number = totalsum + (totalsum * BillCalculator.TAXES['UT'])
        expect(totalBill).toBe(totalExpected)
    })
})
