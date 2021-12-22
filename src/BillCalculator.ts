import { table } from "console"
import { Order } from "./Order"

export class BillCalculator {

    static readonly TAXES = {
        'UT': 0.0685,
        'NV': 0.08,
        'TX': 0.0625,
        'AL': 0.04,
        'CA': 0.0825,
    }

    public calculateBill(order: Order): number {
        let total = order.total
        if (total > 1000)
            total = total - (total * 0.03)
        return total + (total * BillCalculator.TAXES[order.state])
    }
}
