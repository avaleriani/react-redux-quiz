import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './Welcome';

describe('Welcome component', () => {

  test('renders correctly without props', () => {
    const WelcomeComponent = renderer.create(<Welcome/>).toJSON();
    expect(WelcomeComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const props = {
      startGame: () => {
      }
    };
    const WelcomeComponent = renderer.create(<Welcome {...props}/>).toJSON();
    expect(WelcomeComponent).toMatchSnapshot();
  });
});