import { baseModel } from "../../../shared/models/baseModel.model";

export class Revenue extends baseModel{
    value?: number;
    isWaste?: boolean;
    date?: string;
    reason?: string
    description?: string;

    toJSON() {
        return {
            value: this.value,
            isWaste: this.isWaste,
            date: this.date,
            reason: this.reason,
            description: this.description
        }
    }
}