import React from 'react';
import { mount } from 'enzyme';

import InputErrorMessage from './index';

describe('<InputErrorMessage />', () => {
  it('displays InputErrorMessage', () => {
    const wrapper = mount(<InputErrorMessage error="A tiny little error" />);

    expect(wrapper.find(InputErrorMessage)).toHaveLength(1);
  });
});
