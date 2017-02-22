window.m = require('mithril');

var App = require('./components/app');

m.route(document.getElementById('app'), '/', {
  '/': App,
});