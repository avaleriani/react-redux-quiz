import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Loading component', () => {

  test('renders correctly without props', () => {
    const LoadingComponent = renderer.create(<Loading/>).toJSON();
    expect(LoadingComponent).toMatchSnapshot();
  });
});