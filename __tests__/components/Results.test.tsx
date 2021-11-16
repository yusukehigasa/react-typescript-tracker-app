import React from 'react';
import Results from '../../src/components/Results';
import { render } from '@testing-library/react';

const countryData = {
  date: '2021-01-01',
  newConfirmed: 0,
  totalConfirmed: 0,
  newRecovered: 0,
  totalRecovered: 0,
};

describe('Results', () => {
  it('should render the Results', () => {
    const { getByTestId } = render(<Results countryData={countryData} />);

    expect(getByTestId('text-date')).toBeTruthy();
  });
});
