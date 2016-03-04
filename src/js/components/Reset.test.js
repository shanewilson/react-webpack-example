import { shallow } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';
import Reset from './Reset';

describe('<Reset />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(Reset));
    expect(wrapper.type()).to.equal(Button);
  });

  it('should handle onClick', () => {
    const props = {
      handleOnClick: sinon.spy(),
    };
    shallow(h(Reset, props)).simulate('click');
    expect(props.handleOnClick.called).to.equal(true);
  });
});
