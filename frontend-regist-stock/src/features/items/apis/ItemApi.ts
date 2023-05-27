import { Item } from "../types/Item.type";

export default class ItemApi {
    async getItem(code: string): Promise<Item> {
        return new Promise(resolve => {
            const item: Item = {
                name: '砂糖',
                code: '9999999999999',
                categoryId: ''
            };

            resolve(item);
        })
    }
}