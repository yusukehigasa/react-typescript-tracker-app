import React from 'react';
import Loading from '../../src/components/Loading';
import { render, screen } from '@testing-library/react';

describe('Loading', () => {
  it('should render the Loading', () => {
    const text = 'Loading...';
    render(<Loading />);

    const heading = screen.getAllByText(text);
    expect(heading).toBeTruthy();
  });
});
