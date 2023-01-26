import { render, screen } from '@testing-library/react';
import MainBody from '../main-content';

test('renders main content', () => {
  render(<MainBody />);
  const linkElement = screen.getAllByText(/Hello there, nice to see you here!/i);
  expect(linkElement).toBeInTheDocument();
});
