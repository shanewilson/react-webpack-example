var __path__ = '../../../src/js/components/Breadcrumb.jsx';

jest.dontMock(__path__);

describe('Breadcrumb', function() {
  it('sets class name', function() {
    var React = require('react/addons')
    var TestUtils = React.addons.TestUtils;

    var Breadcrumb = require(__path__);
    var Component = TestUtils.renderIntoDocument(<Breadcrumb><ul></ul></Breadcrumb>);

    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'ns-Breadcrumb');
    expect(element).toBeDefined();
  });
});
