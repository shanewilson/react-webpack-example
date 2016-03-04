import { shallow } from 'enzyme';
import { span, button, h } from 'react-hyperscript-helpers';

import Button from './Button';

describe('<Button />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(Button));
    expect(wrapper.type()).to.equal('button');
  });

  it('should allow text label', () => {
    const wrapper = shallow(h(Button, 'children'));
    expect(wrapper.equals(button('children'))).to.equal(true);
  });

  it('should allow dom children', () => {
    const wrapper = shallow(h(Button, {}, span('foo')));
    expect(wrapper.children().equals(span('foo'))).to.equal(true);
  });
});
