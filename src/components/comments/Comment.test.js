import { shallow } from 'enzyme';
import React from 'react';
import Comment from './Comment';

describe('Comment component', () => {
  it('renders Comment', () => {
    const wrapper = shallow(<Comment id={2} comment={'comment'} deleteComment={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
