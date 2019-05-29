import { shallow } from 'enzyme';
import React from 'react';
import Thumbnail from './Thumbnail';

describe('Thumbnail component', () => {
  it('renders thumbnail', () => {
    const wrapper = shallow(<Thumbnail isbn={'222'}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
