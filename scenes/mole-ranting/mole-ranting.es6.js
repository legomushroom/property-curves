var mojs     = require('mo-js');

var moleRantingHand = require('./mole-ranting-hand.es6.js');

// SCENES
var moleRanting = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.scene = document.querySelector('#js-mole-scene');
  },
  createTween: function () {
    this.moleRantingTween = new mojs.Tween;
  },

  initChildScenes: function () {
    moleRantingHand.init(this);
    this.moleRantingTween.start();
  }
}


module.exports = moleRanting;