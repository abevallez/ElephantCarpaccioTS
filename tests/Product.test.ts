import { Product } from "../src/Product"

describe('tests Product object', () => {
    test.each([
        [50,10],
        [82,3],
        [13,4],
    ])('product is constructed', (priceByUnity, quantity) => {
        let product: Product = new Product (priceByUnity, quantity)
        expect(product.priceByUnit).toBe(priceByUnity)
        expect(product.quantity).toBe(quantity)
        expect(product.totalPrice).toBe(priceByUnity * quantity)
    })
})