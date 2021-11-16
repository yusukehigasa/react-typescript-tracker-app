import React from 'react';
import Header from '../../src/components/Header';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  describe('should render the Header', () => {
    it('with link to home', () => {
      const { getByTestId } = render(
        <Router>
          <Header />
        </Router>,
      );

      expect(getByTestId('link-home')).toBeTruthy();
    });

    it('with link to world', () => {
      const { getByTestId } = render(
        <Router>
          <Header />
        </Router>,
      );

      expect(getByTestId('link-world')).toBeTruthy();
    });
  });
});
