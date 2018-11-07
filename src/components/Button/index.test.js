import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  it('displays Button', () => {
    const wrapper = shallow(<Button>Submit</Button>);

    expect(wrapper.html().indexOf('Submit')).not.toBe(-1);
  });
});
