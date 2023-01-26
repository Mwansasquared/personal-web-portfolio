import { render, screen } from '@testing-library/react';
import Footer from '../footer';

test('renders footer link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/2023/i);
  expect(linkElement).toBeInTheDocument();
});
