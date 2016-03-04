import { shallow } from 'enzyme';
import { div, h } from 'react-hyperscript-helpers';

import Counter from './Counter';

describe('<Counter />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(Counter));
    expect(wrapper.type()).to.equal('div');
  });

  it('should take props', () => {
    const wrapper = shallow(h(Counter, {
      operation: 'Increment',
      count: 5,
    }, ''));
    expect(wrapper.equals(div('Increment Count: 5'))).to.equal(true);
  });
});
