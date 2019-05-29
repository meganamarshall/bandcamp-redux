import { shallow } from 'enzyme';
import React from 'react';
import Thumbnails from './Thumbnails';

describe('Thumbnail component', () => {
  it('renders thumbnail', () => {
    const wrapper = shallow(<Thumbnails isbns={['222', '333']}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
