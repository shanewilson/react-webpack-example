var path = '../../src/js/components/linkTo/linkTo.jsx';

jest.dontMock(path);

var getHref = function(element) {
  return element.getDOMNode().href.split('#')[1];
}

describe('LinkTo', function() {
  describe('Home', function() {
    it('links to /', function() {
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;

      var App = require('../../src/js/app.jsx');
      var Routes = require('../../src/js/routes.jsx');
      var routes = <Routes app={App}/>
      TestUtils.renderIntoDocument(routes);

      var LinkToHome = require(path).Home;
      var component = <LinkToHome></LinkToHome>;

      TestUtils.renderIntoDocument(component);

      var element = TestUtils.findRenderedDOMComponentWithClass(component, 'link-home');
      expect(getHref(element)).toEqual('/');
    });
    it('displays link text', function() {
      var LinkToHome = require(path).Home;
      var component = <LinkToHome>Link Name</LinkToHome>;
      expect(component.props.children).toEqual('Link Name');
    });
  });
  describe('Projects', function() {
    it('links to /projects', function() {
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;

      var App = require('../../src/js/app.jsx');
      var Routes = require('../../src/js/routes.jsx');
      var routes = <Routes app={App}/>
      TestUtils.renderIntoDocument(routes);

      var LinkToProjects = require(path).Projects;
      var component = <LinkToProjects></LinkToProjects>;

      TestUtils.renderIntoDocument(component);

      var element = TestUtils.findRenderedDOMComponentWithClass(component, 'link-projects');
      expect(getHref(element)).toEqual('/projects');
    });
    it('displays link text', function() {
      var LinkToProjects = require(path).Projects;
      var component = <LinkToProjects>Link Name</LinkToProjects>;
      expect(component.props.children).toEqual('Link Name');
    });
  });
  describe('Project', function() {
    it('links to /projects/:projectId', function() {
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;

      var App = require('../../src/js/app.jsx');
      var Routes = require('../../src/js/routes.jsx');
      var routes = <Routes app={App}/>
      TestUtils.renderIntoDocument(routes);

      var LinkToProject = require(path).Project;
      var component = <LinkToProject projectId="123"></LinkToProject>;

      TestUtils.renderIntoDocument(component);

      var element = TestUtils.findRenderedDOMComponentWithClass(component, 'link-projects');
      expect(getHref(element)).toEqual('/projects/123');
    });
    it('displays link text', function() {
      var LinkToProject = require(path).Project;
      var component = <LinkToProject>Link Name</LinkToProject>;
      expect(component.props.children).toEqual('Link Name');
    });
  });
});
