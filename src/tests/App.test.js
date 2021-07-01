import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../components/App';

it('should render App component', () => {
  const app = TestRenderer
    .create(<App />)
    .toJSON();
  expect(app).toMatchSnapshot();
});
