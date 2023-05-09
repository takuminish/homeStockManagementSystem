import App from './App';
import { render, screen } from '@testing-library/react';

test('renders App component', () => {
  render(<App />);

  expect(screen.getByText('Vite + React')).toBeTruthy();
});
