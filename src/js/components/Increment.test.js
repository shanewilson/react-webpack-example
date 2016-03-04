import { shallow } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';
import Increment from './Increment';

describe('<Increment />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(Increment));
    expect(wrapper.type()).to.equal(Button);
  });

  it('should handle onClick', () => {
    const props = {
      handleOnClick: sinon.spy(),
    };
    shallow(h(Increment, props)).simulate('click');
    expect(props.handleOnClick.called).to.equal(true);
  });
});
