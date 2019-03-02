import React from 'react';
import renderer from 'react-test-renderer';
import WinGame from './WinGame';

describe('WinGame component', () => {

  test('renders correctly without props', () => {
    const WinGameComponent = renderer.create(<WinGame/>).toJSON();
    expect(WinGameComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const props = {
      score: 55, restartGame: () => {
      }
    };
    const WinGameComponent = renderer.create(<WinGame {...props}/>).toJSON();
    expect(WinGameComponent).toMatchSnapshot();
  });
});