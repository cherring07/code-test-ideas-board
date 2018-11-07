import React from 'react';
import { shallow } from 'enzyme';

import Ideas from './index';
import Provider from '../../internal/Provider';

describe('<Ideas />', () => {
  it('displays Ideas', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };

    const wrapper = shallow(
      <Provider>
        <Ideas {...props} />
      </Provider>
    );

    expect(wrapper.find(Ideas)).toHaveLength(1);
  });
});
