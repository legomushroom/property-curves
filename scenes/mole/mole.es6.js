var mojs     = require('mo-js');

// SCENES
var doorOpen         = require('./door-open.es6.js');
var moleOpen         = require('./mole-open.es6.js');

var mole = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.scene = document.querySelector('#js-mole-scene');
    this.s = 1;
    this.delay = (this.s === 1) ? 1000 : 0;
  },
  createTween: function () {
    this.moleTween = new mojs.Tween;
  },

  initChildScenes: function () {
    doorOpen.init(this);
    moleOpen.init(this);
    // this.moleTween.setProgress(1);
    this.moleTween.start();
  }
}


module.exports = mole;