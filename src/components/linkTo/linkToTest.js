var __path__ = './linkTo.jsx';

jest.dontMock(__path__);

describe('LinkTo', function() {
  beforeEach(function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var App = React.createClass({render:function(){return null;}});
    var Routes = require('../routes/routes.jsx');

    var routes = <Routes app={App}/>
    TestUtils.renderIntoDocument(routes);
  });

  describe('LinkTo', function() {
    it('sets class name', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = <LinkTo target="Home" />;
      TestUtils.renderIntoDocument(Component);

      var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'LinkTo');
      expect(element).toBeDefined();
      element = TestUtils.findRenderedDOMComponentWithClass(Component, 'LinkToHome');
      expect(element).toBeDefined();
    });
    it('sets display name', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = <LinkTo target="Home">Link Name</LinkTo>;
      TestUtils.renderIntoDocument(Component);

      var element = Component.getDOMNode();
      expect(element.innerHTML).toEqual('Link Name');
    });
    it('transfers props to Link', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkTo = require(__path__).LinkTo;
      var Component = <LinkTo extra="true" target="Home" />;
      TestUtils.renderIntoDocument(Component);

      var Link = require('react-nested-router').Link;
      var LinkComponent = TestUtils.findRenderedComponentWithType(Component, Link);

      expect(LinkComponent.props.extra).toEqual('true');
    });
  });

  describe('LinkToProject', function() {
    it('passes on a project id', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).LinkToProject;
      var Component = <LinkToProject projectId="123" />;
      TestUtils.renderIntoDocument(Component);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.projectId).toEqual('123');
    });
    it('uses link name when given', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).LinkToProject;
      var Component = <LinkToProject projectId="123">Project 123</LinkToProject>;
      TestUtils.renderIntoDocument(Component);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('Project 123');
    });
    it('uses project id as name by default', function() {
      var TestUtils = require('react/addons').addons.TestUtils;

      var LinkToProject = require(__path__).LinkToProject;
      var Component = <LinkToProject projectId="123" />;
      TestUtils.renderIntoDocument(Component);

      var LinkTo = require(__path__).LinkTo;
      var LinkToComponent = TestUtils.findRenderedComponentWithType(Component, LinkTo);

      expect(LinkToComponent.props.children).toEqual('123');
    });
  });
});
