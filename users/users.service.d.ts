import { Model } from 'mongoose';
import { CreateGoogleUserDto } from './dto/google-user.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { User, UserDocument } from './schema/user.schema';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(userCreateDto: CreateUserDto): Promise<User>;
    findOne(email: string): Promise<User | null>;
    findOneById(id: string): Promise<User | undefined>;
    createGoogleUser(createGoogleUser: CreateGoogleUserDto): Promise<User>;
    downloadIcon(id: string, icon: string): Promise<User>;
}
