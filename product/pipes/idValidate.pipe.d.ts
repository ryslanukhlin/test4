import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class IdValidatePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
