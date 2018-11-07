import React from 'react';
import { mount } from 'enzyme';

import IdeaCard from './index';

describe('<IdeaCard />', () => {
  it('displays IdeaCard', () => {
    const idea = {
      title: 'A great title',
    };

    const wrapper = mount(<IdeaCard idea={idea} />);

    expect(wrapper.find(IdeaCard)).toHaveLength(1);
    expect(wrapper.html().indexOf('A great title')).not.toBe(-1);
  });
});
