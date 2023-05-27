import { useEffect } from 'react';
import { ItemForm } from '../../types/Item.type';
import ItemList from '../organisms/ItemList/ItemList';

const items: ItemForm[] = [
  {
    name: 'ぶどう',
    code: '1111111111111',
    num: 1,
  },
  {
    name: '納豆',
    code: '2222222222222',
    num: 4,
  },
  {
    name: 'トリュフ',
    code: '3333333333333',
    num: 1,
  },
  {
    name: 'じゃがいも',
    code: '4444444444444',
    num: 10,
  },
];

function ItemReadPage() {
  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemReadPage;
