import { baseModel } from "../../../shared/models/baseModel.model";
import { Revenue } from "../../revenue/model/revenue.model";
import { ScheduledRevenue } from "../../scheduled-revenue/model/scheduled-revenue.model";

export class Wallet extends baseModel {
    revenue?: Revenue[];
    ScheduledRevenue?: ScheduledRevenue[];
    total?: number;

    toJSON() {
        return {
            revenue: this.revenue,
            ScheduledRevenue: this.ScheduledRevenue,
            total: this.total
        }
    }
}