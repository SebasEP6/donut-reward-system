import { render, fireEvent, screen } from '@testing-library/react';
import Button from '.';

test('loads and display button', async () => {
  render(<Button>Test button</Button>);
});
