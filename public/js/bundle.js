(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */'use strict';

var React = require('react');

var Hello = require('./components/hello.jsx');

React.renderComponent(
  new Hello({
    page: ''//router.getRoute(0)
  }),
  document.getElementById('content')
);

},{"./components/hello.jsx":2,"react":"M6d2gk"}],2:[function(require,module,exports){
/** @jsx React.DOM */'use strict';

var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  getInitialState: function() {
    return {
      name: 'World?'
    };
  },
  render: function() {
    return (
        React.DOM.h1(null, "Hello ", this.state.name,"!")
        );
  }
});

},{"react":"M6d2gk"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc3dpbHNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvanMvZ3VscC1zdGFydGVyL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3N3aWxzb24vRG9jdW1lbnRzL0RldmVsb3BtZW50L2pzL2d1bHAtc3RhcnRlci9zcmMvanN4L2FwcC5qc3giLCIvVXNlcnMvc3dpbHNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvanMvZ3VscC1zdGFydGVyL3NyYy9qc3gvY29tcG9uZW50cy9oZWxsby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi8ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBIZWxsbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWxsby5qc3gnKTtcblxuUmVhY3QucmVuZGVyQ29tcG9uZW50KFxuICBuZXcgSGVsbG8oe1xuICAgIHBhZ2U6ICcnLy9yb3V0ZXIuZ2V0Um91dGUoMClcbiAgfSksXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jylcbik7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi8ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdXb3JsZD8nXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgXCJIZWxsbyBcIiwgdGhpcy5zdGF0ZS5uYW1lLFwiIVwiKVxuICAgICAgICApO1xuICB9XG59KTtcbiJdfQ==
