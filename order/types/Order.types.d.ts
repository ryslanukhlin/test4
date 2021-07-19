import * as mongoose from "mongoose";
export declare type TOrder = {
    product: mongoose.Types.ObjectId;
    count: number;
};
