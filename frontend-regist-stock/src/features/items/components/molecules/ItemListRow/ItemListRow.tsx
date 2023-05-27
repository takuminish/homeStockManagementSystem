import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { ItemForm } from '@src/features/items/types/Item.type';
import CategoryIcon from '@mui/icons-material/Category';
import * as React from 'react';
import Box from '@mui/material/Box';

type Props = {
  item: ItemForm;
};

function _ItemListRow(props: Props) {
  const { item } = props;
  return (
    <ListItem sx={{ borderBottom: '1px solid #EEEEEE', display: 'flex' }}>
      <ListItemAvatar>
        <Avatar>
          <CategoryIcon></CategoryIcon>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.code} />
      <Box>{item.num}点</Box>
    </ListItem>
  );
}

const ItemListRow = React.memo(_ItemListRow);

export default ItemListRow;
