import React from 'react';
import Selector from '../../src/components/Selector';
import { render } from '@testing-library/react';
import countriesJson from '../../src/countries.json';

describe('Selector', () => {
  it('should render the Selector', () => {
    const setCountry = jest.fn();

    const { getByTestId } = render(
      <Selector countriesJson={countriesJson} setCountry={setCountry} />,
    );

    expect(getByTestId('drop-down')).toBeTruthy();
  });
});
