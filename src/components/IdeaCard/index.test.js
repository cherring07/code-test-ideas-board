import React from 'react';
import { mount } from 'enzyme';

import IdeaCard from './index';

describe('<IdeaCard />', () => {
  it('displays IdeaCard', () => {
    const idea = {
      id: 10,
      title: 'Hello world!',
    };

    const wrapper = mount(<IdeaCard idea={idea} />);

    expect(wrapper.find(IdeaCard)).toHaveLength(1);
    expect(wrapper.html().indexOf('ID: 10')).not.toBe(-1);
    expect(wrapper.html().indexOf('Hello world!')).not.toBe(-1);
  });
});
