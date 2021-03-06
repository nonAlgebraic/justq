import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from './App';

describe('App', () => {
  it('Renders', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('Has no a11y violations', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
