import { Box, List, ListItem, ListItemText } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ItemForm } from '@src/features/items/types/Item.type';

type Props = {
  items: ItemForm[];
};

function ItemList(props: Props) {
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
          return (
            <ListItem
              key={item.code}
              sx={{ borderBottom: '1px solid #EEEEEE', display: 'flex' }}
            >
              <ListItemAvatar>
                <Avatar>
                  <CategoryIcon></CategoryIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.code} />
              <Box>{item.num}点</Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default ItemList;
