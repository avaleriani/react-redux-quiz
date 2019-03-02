import React from 'react';
import renderer from 'react-test-renderer';
import Help from './Help';

describe('Help component', () => {

  test('renders correctly without props', () => {
    const HelpComponent = renderer.create(<Help/>).toJSON();
    expect(HelpComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const props = { helpText: "test text", display: true };
    const HelpComponent = renderer.create(<Help {...props}/>).toJSON();
    expect(HelpComponent).toMatchSnapshot();
  });
});