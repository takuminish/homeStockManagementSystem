import { AppBar, Box, Button, Toolbar } from '@mui/material';

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        bgcolor: 'background.paper',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            aliginItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button variant="contained" sx={{ width: '50%' }}>
            登録する
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
