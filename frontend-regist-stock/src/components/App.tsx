import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import routes from './routes';
import Footer from '@src/shared/components/Footer/Footer';
import Box from '@mui/material/Box';
import Header from '@src/shared/components/Header/Header';

const location = new ReactLocation();

function App() {
  return (
    <Router location={location} routes={routes}>
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          paddingBottom: '80px',
          boxSizing: 'border-box',
          bgcolor: '#F7F7F7',
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
