import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title element', () => {
  render(<App />);
  const linkElement = screen.getByText(/All I Know Is, IYKYK/i);
  expect(linkElement).toBeInTheDocument();
});
