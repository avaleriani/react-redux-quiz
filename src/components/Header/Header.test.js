import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header component', () => {

  test('renders correctly without props', () => {
    const HeaderComponent = renderer.create(<Header/>).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const props = {
      roundPoints: 2, timeLeft: 50, currentScore: 12,
      highestScore: 24, currentLevel: 2
    };
    const HeaderComponent = renderer.create(<Header {...props}/>).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
});