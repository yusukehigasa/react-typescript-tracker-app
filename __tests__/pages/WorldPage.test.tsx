import React from 'react';
import WorldPage from '../../src/pages/WorldPage';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

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

describe('WorldPage', () => {
  it('should render the WorldPage', () => {
    const setCountry = jest.fn();

    const { getByTestId } = render(
      <Router>
        <WorldPage allCountriesData={allCountriesData} />
      </Router>,
    );

    expect(getByTestId('wrapper')).toBeTruthy();
  });
});
