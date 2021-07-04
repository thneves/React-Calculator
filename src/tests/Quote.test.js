import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../pages/Quote';

it('should render the Quote page component', () => {
  const quote = TestRenderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
