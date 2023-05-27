import { Box, List } from '@mui/material';
import { ItemForm } from '@src/features/items/types/Item.type';
import * as React from 'react';
import ItemListRow from '../../molecules/ItemListRow/ItemListRow';

type Props = {
  items: ItemForm[];
};

function _ItemList(props: Props) {
  const { items } = props;
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <List sx={{ padding: 0 }}>
        {items.map((item) => {
          return <ItemListRow key={item.code} item={item} />;
        })}
      </List>
    </Box>
  );
}

const ItemList = React.memo(_ItemList);

export default ItemList;
