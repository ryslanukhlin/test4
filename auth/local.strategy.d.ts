import { UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { User } from "src/users/schema/user.schema";
import { AuthService } from "./auth.service";
declare const LocalStrategry_base: new (...args: any[]) => Strategy;
export declare class LocalStrategry extends LocalStrategry_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<User | UnauthorizedException>;
}
export {};
