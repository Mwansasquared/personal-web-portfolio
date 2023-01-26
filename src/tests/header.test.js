import { render, screen } from '@testing-library/react';
import Header from '../Components/header';

test('renders header navbar', () => {
  render(<Header />);
  const linkElement = screen.getAllByText(/'Dancing Hello'/i);
  expect(linkElement).toBeInTheDocument();
});
