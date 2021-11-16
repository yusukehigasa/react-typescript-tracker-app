import React from 'react';
import TopPage from '../../src/pages/TopPage';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import countriesJson from '../../src/countries.json';

const countryData = {
  date: '2021-01-01',
  newConfirmed: 0,
  totalConfirmed: 0,
  newRecovered: 0,
  totalRecovered: 0,
};

describe('TopPage', () => {
  it('should render the TopPage', () => {
    const setCountry = jest.fn();

    const { getByTestId } = render(
      <Router>
        <TopPage
          countriesJson={countriesJson}
          setCountry={setCountry}
          countryData={countryData}
          loading={true}
        />
      </Router>,
    );

    expect(getByTestId('wrapper')).toBeTruthy();
  });
});
