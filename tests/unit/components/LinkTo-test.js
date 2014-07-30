var __path__ = '../../../src/js/components/LinkTo.jsx';

jest.dontMock(__path__);

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

      var Link = require('react-nested-router').Link;
      var LinkComponent = TestUtils.findRenderedComponentWithType(Component, Link);

      expect(LinkComponent.props.extra).toEqual('true');
    });
  });

  describe.only('Home', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__);
      var Component = TestUtils.renderIntoDocument(<LinkTo.Home />);
    });
  });


  describe.only('Styleguide', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__);
      var Component = TestUtils.renderIntoDocument(<LinkTo.Styleguide />);
    });
  });


  describe.only('Cart', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__);
      var Component = TestUtils.renderIntoDocument(<LinkTo.Cart />);
    });
  });

  describe('Projects', function() {
    it('has a matching route', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__);
      var Component = TestUtils.renderIntoDocument(<LinkTo.Projects />);
    });
  });

  describe('Project', function() {
    it('passes on a project id', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).Project;
      var Component = TestUtils.renderIntoDocument(<LinkToProject projectId="123" />);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.projectId).toEqual('123');
    });
    it('uses link name when given', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).Project;
      var Component = TestUtils.renderIntoDocument(<LinkToProject projectId="123">Project 123</LinkToProject>);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('Project 123');
    });
    it('uses project id as name by default', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).Project;
      var Component = TestUtils.renderIntoDocument(<LinkToProject projectId="123" />);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('123');
    });
  });
});
