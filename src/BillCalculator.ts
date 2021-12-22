import { Order } from "./Order"

export class BillCalculator {

    public calculateBill(order: Order): number {
        const ut_tax = 0.0685
        let total = order.total
        if (total > 1000)
            total = total * 0.03
        return total * ut_tax
    }
}
