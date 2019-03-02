import React from 'react';
import renderer from 'react-test-renderer';
import LostGame from './LostGame';

describe('LostGame component', () => {

  test('renders correctly without props', () => {
    const LostGameComponent = renderer.create(<LostGame/>).toJSON();
    expect(LostGameComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const props = {
      score: 22, restartGame: () => {
      }
    };
    const LostGameComponent = renderer.create(<LostGame {...props}/>).toJSON();
    expect(LostGameComponent).toMatchSnapshot();
  });
});