import { shallow } from 'enzyme';
import { h } from 'react-hyperscript-helpers';

import App from './App';

describe('<App />', () => {
  it('should exist', () => {
    const wrapper = shallow(h(App));
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain top level components', () => {
    const wrapper = shallow(h(App));
    expect(wrapper.children()).to.have.length(4);
  });
});
