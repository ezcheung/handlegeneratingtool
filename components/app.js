'use strict';
var m = require('mithril');
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');

var App = module.exports;

App.controller = function(){
  var ctrl = this;

  ctrl.hgt = "Hannah Grace Taylor";

  ctrl.generate = function() {
    return m.request({method: "GET", url: "/randomhgt"})
    .then((resp) => {
      console.log("resp: ", resp);
      ctrl.hgt = resp.data.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    });
  }
}

App.view = function(ctrl){
  return m('gibbins', {class:'default'}, [
      m('h1', ctrl.hgt),
      m('div'),
      m('button', {onclick: ctrl.generate}, "Generate"),
    ])
}
