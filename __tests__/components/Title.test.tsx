import React from 'react';
import Title from '../../src/components/Title';
import { render, screen } from '@testing-library/react';

describe('Title', () => {
  it('should render the Title', () => {
    const text = 'Covid Tracker';
    render(<Title />);

    const heading = screen.getAllByText(text);
    expect(heading).toBeTruthy();
  });
});
