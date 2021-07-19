/// <reference types="multer" />
import { UsersService } from './users.service';
import { CreateUserDto } from "./dto/user-create.dto";
import { FileService } from 'src/file/file.service';
import { CreateGoogleUserDto } from './dto/google-user.dto';
export declare class UsersController {
    private usersService;
    private fileService;
    constructor(usersService: UsersService, fileService: FileService);
    register(createUserDto: CreateUserDto): Promise<import("./schema/user.schema").User>;
    downloadIcon(icon: Express.Multer.File, id: string): Promise<import("./schema/user.schema").User>;
    getOrCreateGoogleUser(createGoogleUserDto: CreateGoogleUserDto): Promise<import("./schema/user.schema").User>;
}
