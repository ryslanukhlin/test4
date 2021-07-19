/// <reference types="multer" />
import { FuleTypeEnum } from './enum/type-file.enum';
export declare class FileService {
    createImage(image: Express.Multer.File, typeFile: FuleTypeEnum): Promise<string>;
}
