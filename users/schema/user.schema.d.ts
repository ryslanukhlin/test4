import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    nicname: string;
    email: string;
    password: string;
    icon: string | null;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, {}>, import("mongoose").Model<any, any>, undefined>;
