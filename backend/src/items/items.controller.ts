import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { GetItemDto } from './dto/get-item.dto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {

    }

    /**
     * GETパラメータに指定されたCODEから、商品情報を検索し返却する
     */
    @Get()
    findByCode(@Query() query: GetItemDto) {
        const code = query.code
        return this.itemService.findByCode(code);
    }
}
