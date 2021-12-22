import { Order } from "../src/Order"

describe('tests Order object', () => {
    test('order is constructed', () => {
        const expected_products: number[][] = [
            [10, 1],
            [20, 4],
            [30, 2]
        ]
        const state: string = 'UT'
        let order: Order = new Order (expected_products, state)
        expect(order.products).toBe(expected_products)
        expect(order.state).toBe(state)
    })

    test.each([
        [[
            [10, 1],
            [20, 2],
            [30, 3],
        ], 140],
        [[
            [10, 1],
            [10, 5],
            [10, 2],
        ], 80],
        [[
            [100, 2],
            [50, 4],
            [40, 2],
        ], 480]
    ])('total of prices is sum of product prices with more than 1 quantity by product', (products: number[][], expected_total: number) => {
        let order: Order = new Order(products, 'UT')
        expect(order.total).toBe(expected_total)
    })
})
