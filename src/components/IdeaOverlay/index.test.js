import React from 'react';
import { mount } from 'enzyme';

import IdeaOverlay from './index';
import Provider from '../../internal/Provider';

describe('<IdeaOverlay />', () => {
  it('displays IdeaOverlay', () => {
    const mock = jest.fn();

    const newIdea = {
      id: 10,
    };

    const wrapper = mount(
      <Provider>
        <IdeaOverlay newIdea={newIdea} overlayClose={mock} />
      </Provider>
    );

    expect(wrapper.find(IdeaOverlay)).toHaveLength(1);
  });
});
