import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chess circle link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /mychesscircle\.com/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://www.mychesscircle.com/');
});