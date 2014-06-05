/** @jsx React.DOM */
jest.dontMock('../../src/js/components/hello.jsx');
describe('Hello', function() {
  it('Says Hello something', function() {
    var React = require('react/addons');
    var Hello = require('../../src/js/components/hello.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var hello = <Hello />;
    TestUtils.renderIntoDocument(hello);

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'label');
    expect(label.getDOMNode().textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'input');
    TestUtils.Simulate.change(input);
    expect(label.getDOMNode().textContent).toEqual('On');
  });
});
