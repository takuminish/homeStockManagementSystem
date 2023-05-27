import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ width: '100%', bgColor: '#FEF7FF' }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
          商品の読み取り
        </Typography>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
