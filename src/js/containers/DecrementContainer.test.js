import { shallow, mount } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Decrement from 'components/Decrement';
import { DecrementContainer } from './DecrementContainer';

describe('<DecrementContainer />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(DecrementContainer));
    expect(wrapper.type()).to.equal(Decrement);
  });

  it('should handle onClick', () => {
    const props = {
      decrement: sinon.spy(),
    };
    const wrapper = mount(h(DecrementContainer, props));
    wrapper.find(Decrement).simulate('click');
    expect(props.decrement.called).to.equal(true);
  });
});
