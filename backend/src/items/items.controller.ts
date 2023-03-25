import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {

    }

    /**
     * GETパラメータに指定されたCODEから、商品情報を検索し返却する
     */
    @Get()
    findByCode(@Query('code') code: string) {
        return this.itemService.findByCode(code);
    }
}
