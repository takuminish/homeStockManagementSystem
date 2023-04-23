import { Injectable } from '@nestjs/common';
import { ItemsRepository } from './items.repository';

/**
 * 商品サービス 
 */
@Injectable()
export class ItemsService {

    /**
     * コンストラクタ
     */
    constructor(private readonly itemsRepositopry: ItemsRepository) {
    }

    /**
     * 引数のcodeより、Yahoo商品検索APIを使用して、商品情報を返却する
     */
    async findByCode(code: string) {
        const item = await this.itemsRepositopry.findByCode(code);
        console.log(item)
    }
}
