import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User | null>;
    login(user: UserDocument): Promise<{
        access_token: string;
    }>;
}
