import { shallow, mount } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Increment from 'components/Increment';
import { IncrementContainer } from './IncrementContainer';

describe('<IncrementContainer />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(IncrementContainer));
    expect(wrapper.type()).to.equal(Increment);
  });

  it('should handle onClick', () => {
    const props = {
      increment: sinon.spy(),
    };
    const wrapper = mount(h(IncrementContainer, props));
    wrapper.find(Increment).simulate('click');
    expect(props.increment.called).to.equal(true);
  });
});
