import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with Benjamin Diuguid heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Benjamin Diuguid/i });
  expect(heading).toBeInTheDocument();
});
