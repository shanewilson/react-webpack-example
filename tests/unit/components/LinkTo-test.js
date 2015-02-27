require("babel/polyfill");
var __path__ = '../../../src/js/components/LinkTo.jsx';

jest.dontMock(__path__);
jest.dontMock('events');
var React = require('react/addons');
var { func } = React.PropTypes;
var Router = require('react-router');
var routes = require('../../../src/js/routes.jsx');

// https://github.com/rackt/react-router/blob/master/docs/guides/testing.md
var stubRouterContext = (Component, props, stubs) => {
  return React.createClass({
    childContextTypes: {
      makePath: func,
      makeHref: func,
      transitionTo: func,
      replaceWith: func,
      goBack: func,
      getCurrentPath: func,
      getCurrentRoutes: func,
      getCurrentPathname: func,
      getCurrentParams: func,
      getCurrentQuery: func,
      isActive: func
    },

    getChildContext () {
      return Object.assign({
        makePath () {},
        makeHref () {},
        transitionTo () {},
        replaceWith () {},
        goBack () {},
        getCurrentPath () {},
        getCurrentRoutes () {},
        getCurrentPathname () {},
        getCurrentParams () {},
        getCurrentQuery () {},
        isActive () {}
      }, stubs);
    },

    render () {
      return <Component {...props} />
    }
  });
};

describe('LinkTo', function() {
  beforeEach(function() {
    //var TestUtils = React.addons.TestUtils;
    //
    //var App = React.createClass({render:function(){return null;}});
    //var Routes = require('../../../src/js/routes.jsx');
    //
    //var routes = <Routes app={App}/>
    //TestUtils.renderIntoDocument(routes);
  });

  //describe('LinkTo', function() {
  //  it('sets class name', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var Component = TestUtils.renderIntoDocument(<LinkTo target="home" />);
  //
  //    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'ns-LinkTo');
  //    expect(element).toBeDefined();
  //    element = TestUtils.findRenderedDOMComponentWithClass(Component, 'ns-LinkTo--home');
  //    expect(element).toBeDefined();
  //  });
  //  it('sets display name', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var Component = TestUtils.renderIntoDocument(<LinkTo target="home">Link Name</LinkTo>);
  //
  //    var element = Component.getDOMNode();
  //    expect(element.innerHTML).toEqual('Link Name');
  //  });
  //  it('transfers props to Link', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var Component = TestUtils.renderIntoDocument(<LinkTo extra="true" target="home" />);
  //
  //    var Link = require('react-router').Link;
  //    var LinkComponent = TestUtils.findRenderedComponentWithType(Component, Link);
  //
  //    expect(LinkComponent.props.extra).toEqual('true');
  //  });
  //});

  describe('Home', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToHome = stubRouterContext(require(__path__).Home);
      var Component = TestUtils.renderIntoDocument(<LinkToHome />);
    });
  });

  describe('Cart', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToCart = stubRouterContext(require(__path__).Cart);
      var Component = TestUtils.renderIntoDocument(<LinkToCart />);
    });
  });

  describe('Widgets', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToWidgets = stubRouterContext(require(__path__).Widgets);
      var Component = TestUtils.renderIntoDocument(<LinkToWidgets />);
    });
  });

  //describe('Widget', function() {
  //  it('passes on a widget id', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkToWidget = stubRouterContext(require(__path__).Widget);
  //    var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123" />);
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);
  //
  //    expect(LinkToComponent.props.widgetId).toEqual('123');
  //  });
  //  it('uses link name when given', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkToWidget = stubRouterContext(require(__path__).Widget);
  //    var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123">Widget 123</LinkToWidget>);
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);
  //
  //    expect(LinkToComponent.props.children).toEqual('Widget 123');
  //  });
  //  it('uses widget id as name by default', function() {
  //    var TestUtils = require('react/addons').addons.TestUtils;
  //
  //    var LinkToWidget = stubRouterContext(require(__path__).Widget);
  //    var Component = TestUtils.renderIntoDocument(<LinkToWidget widgetId="123" />);
  //
  //    var LinkTo = stubRouterContext(require(__path__).LinkTo);
  //    var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);
  //
  //    expect(LinkToComponent.props.children).toEqual('123');
  //  });
  //});
});
