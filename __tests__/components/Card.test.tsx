import React from 'react';
import Card from '../../src/components/Card';
import { render, screen } from '@testing-library/react';

const allCountriesData = [
  {
    Country: 'JAPAN',
    NewConfirmed: 999,
    TotalConfirmed: 999,
  },
  {
    Country: 'CHINA',
    NewConfirmed: 999,
    TotalConfirmed: 999,
  },
];

describe('Card', () => {
  it('should render the Card', () => {
    const text = 'Card';
    render(<Card allCountriesData={allCountriesData} />);

    const heading = screen.getAllByText(text);
    expect(heading).toBeTruthy();
  });
});
