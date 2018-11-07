import React from 'react';
import { mount } from 'enzyme';

import Card from './index';

describe('<Card />', () => {
  it('displays Card', () => {
    const wrapper = mount(
      <Card>
        <span>Hello World!</span>
      </Card>
    );

    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.html().indexOf('Hello World!')).not.toBe(-1);
  });
});
