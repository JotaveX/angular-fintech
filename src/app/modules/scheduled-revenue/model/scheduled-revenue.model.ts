import { periodType } from "../../../../assets/enum/period.enum";
import { baseModel } from "../../../shared/models/baseModel.model";
import { Revenue } from "../../revenue/model/revenue.model";

export class ScheduledRevenue extends baseModel{
    date?: number;
    period?: periodType;
    revenue?: Revenue;

    toJSON() {
        return {
            date: this.date,
            period: this.period,
            revenue: this.revenue?.toJSON() ?? null
        }
    }
}