import { Product } from "../src/Product"
import { Order } from "../src/Order"

describe('tests Order object', () => {
    test('order is constructed', () => {
        let expectedProducts: Product[] = [
            new Product(10,1),
            new Product(20,4),
            new Product(30,2)
        ]
        const state: string = 'UT'
        let order: Order = new Order (expectedProducts, state)
        expect(order.products).toBe(expectedProducts)
        expect(order.state).toBe(state)
    })

    test.each([
        [[
            new Product(10,1),
            new Product(20,2),
            new Product(30,3)
        ], 140],
        [[
            new Product(10,1),
            new Product(10,5),
            new Product(10,2)
        ], 80],
        [[
            new Product(100,2),
            new Product(50,4),
            new Product(40,2)
        ], 480]
    ])('total of prices is sum of product prices with more than 1 quantity by product', (products: Product[], expected_total: number) => {
        let order: Order = new Order(products, 'UT')
        expect(order.total).toBe(expected_total)
    })
})
