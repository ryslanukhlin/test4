import * as mongoose from 'mongoose';
import { User } from "../users/schema/user.schema";
export declare type CommentDocument = Comment & mongoose.Document;
export declare class Comment {
    text: string;
    userId: User;
}
export declare const CommentSchema: mongoose.Schema<mongoose.Document<Comment, {}>, mongoose.Model<any, any>, undefined>;
