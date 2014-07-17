/** @jsx React.DOM */

var path = '../../src/js/components/linkTo.jsx';

jest.dontMock(path);

describe('LinkTo', function() {
  describe('Home', function() {
    it('links to /', function() {
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;

      var App = require('../../src/js/app.jsx');
      var Routes = require('../../src/js/app.jsx');


      var Home = require(path).Home;
      var component = <Home>Link Name</Home>;

      TestUtils.renderIntoDocument(component);
      var href = TestUtils.findRenderedDOMComponentWithTag(component, 'href');
       expect(label.getDOMNode().href).toEqual('/');
    });
    it('displays name', function() {
      var Home = require(path).Home;
      var component = <Home>Link Name</Home>;
      expect(component.props.children).toEqual('Link Name');
    });
  });
});
