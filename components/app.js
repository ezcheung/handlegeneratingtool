var m = require('mithril');

var App = module.exports;

App.controller = function(){
  var ctrl = this;

}

App.view = function(ctrl){
  return m('gibbins', {class:'default'}, [
      //m('h1', ctrl.gamgam ? Gambeezy[ctrl.gamgam](ctrl.trombone) : ctrl.trombone),
      m('h1', ctrl.gamgams.length ? ctrl.gamgams.reduce((a, f)=> Gambeezy[f](a), ctrl.trombone) : ctrl.trombone),
      m('div'),
      //m('img', {src: ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]][ctrl.gramie]}),
      m('div', {class:"images"}, images(ctrl)),
      m('div'),
      m('button', {onclick: ctrl.zumba}, ctrl.trombone === "Jamie\n" ? "Start Jambifying!" : "Gumbo another Gibbins!"),
      m('div', {class: "controls"}, [
          m('label', 'Modifiers: '),
          m('div', optionCheckboxes(ctrl))
        ]),
      /*m('select', {onchange: function(e){
        if(e.currentTarget.value === "No Modifier") ctrl.gamgam = null;
        else ctrl.gamgam = e.currentTarget.value;
      }}, optionList()),*/
    ])
}
