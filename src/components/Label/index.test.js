import React from 'react';
import { mount } from 'enzyme';

import Label from './index';

describe('<Label />', () => {
  it('displays Label', () => {
    const wrapper = mount(<Label htmlFor="email" text="Email address" />);

    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.html().indexOf('for="email"')).not.toBe(-1);
  });
});
