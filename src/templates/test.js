export default (name) =>
  `import {render} from '../../../utils/test-utils';
import {${name}} from '.';
import React from 'react';

describe('Render tests', () => {
  test('render correctly', () => {
    const handlePress = jest.fn();
    const {asJSON} = render(<${name} />);
    expect(asJSON()).toBeTruthy();
  });
});
`;
