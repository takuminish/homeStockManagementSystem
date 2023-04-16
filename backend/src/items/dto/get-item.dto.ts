import { IsNotEmpty } from 'class-validator'
/**
 * 賞品取得API DTO
 */
export class GetItemDto {

    /** バーコード(JANコード) */
    @IsNotEmpty()
    code: string;

}