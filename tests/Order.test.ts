import { Order } from "../src/Order"

describe('tests Order', () => {    
    test('order is constructed'), () => {
        const expected_products: number[] = [10, 20, 30]
        const state: string = 'UT'
        let order: Order = new Order (expected_products, state)
        expect(order.products).toBe(expected_products)
        expect(order.state).toBe(state)
    }

    test.each([
        [[10, 20, 30], 50],
        [[10, 10, 10], 30],
        [[100, 50, 50], 200],
    ])('sumPrices is sum of product prices', (products: number[], expected_total: number) => {
        let order: Order = new Order(products, 'UT')
        expect(order.sumPrices).toBe(expected_total)
    })
})
