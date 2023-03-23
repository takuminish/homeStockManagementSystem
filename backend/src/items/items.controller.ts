import { Controller, Get, Query } from '@nestjs/common';

@Controller('items')
export class ItemsController {

    /**
     * GETパラメータに指定されたCODEから、商品情報を検索し返却する
     */
    @Get()
    findByCode(@Query('code') code: string) {
    }
}
