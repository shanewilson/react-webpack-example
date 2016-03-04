import { shallow } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';
import Decrement from './Decrement';

describe('<Decrement />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(Decrement));
    expect(wrapper.type()).to.equal(Button);
  });

  it('should handle onClick', () => {
    const props = {
      handleOnClick: sinon.spy(),
    };
    shallow(h(Decrement, props)).simulate('click');
    expect(props.handleOnClick.called).to.equal(true);
  });
});
