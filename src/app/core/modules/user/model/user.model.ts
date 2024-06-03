import { baseModel } from "../../../../shared/models/baseModel.model";

export class User extends baseModel {
    name?: string;
    email?: string;
    password?: string;
    wallet?: string;
    birth?: string;

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            wallet: this.wallet,
            birth: this.birth
        }
    }
}