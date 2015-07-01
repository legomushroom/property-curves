var mojs     = require('mo-js');

// SCENES
var doorOpen         = require('./door-open.es6.js');
var moleOpen         = require('./mole-open.es6.js');
    // cubeAnticipation = require('./cube-anticipation');

var mole = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.scene = document.querySelector('#js-mole-scene');
    this.s = 1;
    this.delay = (this.s === 1) ? 1000 : 0;
    // this.delay = 0;

    // this.cubeEl       = document.querySelector('#js-cube');
    // this.cubeSquashEl = document.querySelector('#js-cube-squash');
    // this.shadowEl     = document.querySelector('#js-shadow');
    // this.sceneEl      = document.querySelector('#js-cube-scene');
    // this.translateY   = 500;
    // this.duration     = 2000;
    // this.delay        = 0;
  },
  createTween: function () {
    this.moleTween = new mojs.Tween;
  },

  initChildScenes: function () {
    doorOpen.init(this);
    moleOpen.init(this);
    this.moleTween.start();
    // cubeFall.init(this);
    // cubeAnticipation.init(this);
  }
}


module.exports = mole;