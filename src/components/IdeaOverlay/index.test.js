import React from 'react';
import { mount } from 'enzyme';

import Button from './index';
import IdeaOverlay from './index';
import Provider from '../../internal/Provider';

describe('<IdeaOverlay />', () => {
  it('displays IdeaOverlay', () => {
    const mock = jest.fn();
    const wrapper = mount(
      <Provider>
        <IdeaOverlay overlayClose={mock} />
      </Provider>
    );

    expect(wrapper.find(IdeaOverlay)).toHaveLength(1);
  });

  it('displays IdeaOverlay and closes overlay', () => {
    const mock = jest.fn();
    const wrapper = mount(
      <Provider>
        <IdeaOverlay overlayClose={mock} />
      </Provider>
    );

    wrapper
      .find(IdeaOverlay)
      .find(Button)
      .simulate('click');

    expect(mock).toBeCalled();
  });
});
