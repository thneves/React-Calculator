import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from '../pages/Home';

it('should render Home page component', () => {
  const home = TestRenderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
