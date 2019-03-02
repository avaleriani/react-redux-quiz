import React from 'react';
import renderer from 'react-test-renderer';
import Btn from './Btn';

describe('Btn component', () => {

  test('renders correctly without props', () => {
    const btnComponent = renderer.create(<Btn/>).toJSON();
    expect(btnComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const btnComponent = renderer.create(<Btn action={() => {
    }} type="button" text="text"/>).toJSON();
    expect(btnComponent).toMatchSnapshot();
  });
});