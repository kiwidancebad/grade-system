import React from 'react';
import { Provider } from './Provider';

import { mount } from 'enzyme';

describe('<Provider />', () => {
  describe('render', () => {
    it('successful', () => {
      const Component = mount(<Provider />);
      expect(Component);
    })
  });
});
