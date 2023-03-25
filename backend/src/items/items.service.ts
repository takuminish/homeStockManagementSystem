import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, map } from 'rxjs';

/**
 * 商品サービス 
 */
@Injectable()
export class ItemsService {

    /** 商品検索APIのURI */
    private readonly itemSearchApiUri: string = 'https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch';

    /**
     * コンストラクタ
     */
    constructor(private readonly httpService: HttpService, private config: ConfigService) {

    }

    /**
     * 引数のcodeより、Yahoo商品検索APIを使用して、商品情報を返却する
     */
    async findByCode(code: string) {
        const apiKey: string = this.config.get<string>('ITEM_SEARCH_API_KEY');
        const value = await firstValueFrom(this.httpService.get(`${this.itemSearchApiUri}?appid=${apiKey}&jan_code=${code}&results=1`).pipe(map((response) => response.data)));
    }
}
