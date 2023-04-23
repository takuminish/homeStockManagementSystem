import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

/**
 * 外部APIを利用して商品情報を取得するリポジトリ
 */
@Injectable()
export class ItemsRepository {

    /** 商品検索APIのURI */
    private readonly itemSearchApiUri: string = 'https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch';

    /**
     * コンストラクタ
     */
    constructor(private readonly httpService: HttpService, private config: ConfigService) { }

    /**
     * CODE(JANコード)に合致する商品情報を取得する
     */
    async findByCode(code: string) {
        const apiKey: string = this.config.get<string>('ITEM_SEARCH_API_KEY');
        return await firstValueFrom(this.httpService.get(`${this.itemSearchApiUri}?appid=${apiKey}&jan_code=${code}&results=1`).pipe(map((response) => response.data)));
    }

}