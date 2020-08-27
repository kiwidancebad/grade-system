import React from 'react';
import App from './App';

import { mount } from 'enzyme';

describe('<App />', () => {
  describe('render', () => {
    it('successful', () => {
      const Component = mount(<App />);
      expect(Component);
    });
  });
});
