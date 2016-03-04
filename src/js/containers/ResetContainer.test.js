import { shallow, mount } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Reset from 'components/Reset';
import { ResetContainer } from './ResetContainer';

describe('<ResetContainer />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(ResetContainer));
    expect(wrapper.type()).to.equal(Reset);
  });

  it('should handle onClick', () => {
    const props = {
      reset: sinon.spy(),
    };
    const wrapper = mount(h(ResetContainer, props));
    wrapper.find(Reset).simulate('click');
    expect(props.reset.called).to.equal(true);
  });
});
