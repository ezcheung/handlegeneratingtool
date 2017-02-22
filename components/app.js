'use strict';
var m = require('mithril');
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');

var App = module.exports;

App.controller = function(){
  var ctrl = this;

  ctrl.hgt = "Hannah Grace Taylor";

  ctrl.generate = function() {
    ctrl.hgt = `${wordsH()} ${wordsG()} ${wordsT()}`;
  }
}

App.view = function(ctrl){
  return m('gibbins', {class:'default'}, [
      m('h1', ctrl.hgt),
      m('div'),
      m('button', {onclick: ctrl.generate}, "Generate"),
    ])
}
