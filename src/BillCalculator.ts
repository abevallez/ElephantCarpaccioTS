import { Order } from "./Order"

export class BillCalculator {

    static readonly TAXES = {
        'UT': 0.0685,
        'NV': 0.08,
        'TX': 0.0625,
        'AL': 0.04,
        'CA': 0.0825,
    }

    static readonly DISCOUNTS = {
        '1000': 0.03,
        '5000': 0.05,
        '7000': 0.07,
        '10000': 0.10,
        '15000': 0.15,
    }

    public calculateBill(order: Order): number {
        let total = order.total
        total = this.applyDiscount(order)
        return this.applyTax(total, order.state)
    }

    private applyTax(total: number, state: string): number {
        return total + (total * BillCalculator.TAXES[state])
    }

    private applyDiscount(order: Order) {
        let discount: number = 0
        for (let key in BillCalculator.DISCOUNTS) {
            if (order.total > parseInt(key)) {
                discount = BillCalculator.DISCOUNTS[key]
            }
        }
        return order.total - (order.total * discount)
    }
}
