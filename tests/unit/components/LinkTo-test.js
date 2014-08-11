var __path__ = '../../../src/js/components/LinkTo.jsx';

jest.dontMock(__path__);
jest.dontMock('events');

describe('LinkTo', function() {
  beforeEach(function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var App = React.createClass({render:function(){return null;}});
    var Routes = require('../../../src/js/routes.jsx');

    var routes = <Routes app={App}/>
    TestUtils.renderIntoDocument(routes);
  });

  describe('LinkTo', function() {
    it('sets class name', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = TestUtils.renderIntoDocument(<LinkTo target="home" />);

      var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'ns-LinkTo');
      expect(element).toBeDefined();
      element = TestUtils.findRenderedDOMComponentWithClass(Component, 'ns-LinkTo--home');
      expect(element).toBeDefined();
    });
    it('sets display name', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = TestUtils.renderIntoDocument(<LinkTo target="home">Link Name</LinkTo>);

      var element = Component.getDOMNode();
      expect(element.innerHTML).toEqual('Link Name');
    });
    it('transfers props to Link', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = TestUtils.renderIntoDocument(<LinkTo extra="true" target="home" />);

      var Link = require('react-router').Link;
      var LinkComponent = TestUtils.findRenderedComponentWithType(Component, Link);

      expect(LinkComponent.props.extra).toEqual('true');
    });
  });

  describe('Home', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToHome = require(__path__).Home;
      var Component = TestUtils.renderIntoDocument(<LinkToHome />);
    });
  });


  describe('Styleguide', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToStyleguide = require(__path__).Styleguide;
      var Component = TestUtils.renderIntoDocument(<LinkToStyleguide />);
    });
  });


  describe('Cart', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToCart = require(__path__).Cart;
      var Component = TestUtils.renderIntoDocument(<LinkToCart />);
    });
  });

  describe('Widgets', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToWidgets = require(__path__).Widgets;
      var Component = TestUtils.renderIntoDocument(<LinkToWidgets />);
    });
  });

  describe('Widget', function() {
    it('passes on a widget id', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToWidget = require(__path__).Widget;
      var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123" />);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.widgetId).toEqual('123');
    });
    it('uses link name when given', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToWidget = require(__path__).Widget;
      var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123">Widget 123</LinkToWidget>);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('Widget 123');
    });
    it('uses widget id as name by default', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToWidget = require(__path__).Widget;
      var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123" />);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('123');
    });
  });
});
