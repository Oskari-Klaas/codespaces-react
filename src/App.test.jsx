import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders each expense and its amount', () => {
  render(<App />);
  expect(screen.getByText('New book')).toBeDefined();
  expect(screen.getByText('New jeans')).toBeDefined();
  expect(screen.getByText('30.99')).toBeDefined();
  expect(screen.getByText('99.99')).toBeDefined();
});
