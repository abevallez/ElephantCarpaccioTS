import { table } from "console"
import { disconnect } from "process"
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
        '5000': 0.05
    }

    public calculateBill(order: Order): number {
        let total = order.total
        let discount: number = 0
        for (let key in BillCalculator.DISCOUNTS) {
            if (total > parseInt(key)){
                discount = BillCalculator.DISCOUNTS[key]
            }
        } 
        total = total - (total * discount)
        return total + (total * BillCalculator.TAXES[order.state])
    }
}
