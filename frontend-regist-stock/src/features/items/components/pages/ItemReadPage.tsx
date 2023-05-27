import { useEffect, useState } from 'react';
import { ItemForm } from '../../types/Item.type';
import ItemList from '../organisms/ItemList/ItemList';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import ItemApi from '../../apis/ItemApi';
import useItem from '../../hooks/useItem';

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

function isExistItem(items: ItemForm[], code: string): boolean {
  return items.some((item) => code === item.code);
}

function ItemReadPage() {
  const [code, setCode] = useState('');
  const [readItems, setReadItems] = useState(items);
  const { itemResult, fetchItem } = useItem();

  const handleKeyDown = (event: KeyboardEvent) => {
    setCode((prev) => prev + event.key);
    return;
  };

  useEffect(() => {
    if (code.length === 13) {
      void fetchItem(code);
      setCode('');
    }
  }, [code, setCode]);

  useEffect(() => {
    if (!itemResult.value) {
      return;
    }

    const itemResultValue = itemResult.value;

    if (isExistItem(readItems, itemResultValue.code)) {
      const newReadItems = readItems.map((item) => {
        return item.code === itemResultValue.code
          ? { ...item, num: item.num + 1 }
          : { ...item };
      });
      setReadItems(newReadItems);
    } else {
      setReadItems([
        ...readItems,
        { name: itemResult.value.name, code: itemResult.value.code, num: 1 },
      ]);
    }
  }, [itemResult]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
  }, []);

  return (
    <>
      <ItemList items={readItems} />
    </>
  );
}

export default ItemReadPage;
