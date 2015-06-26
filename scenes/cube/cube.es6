var mojs     = require('mo-js');

// SCENES
var cubeFall         = require('./cube-fall'),
    cubeAnticipation = require('./cube-anticipation');

var cube = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.cubeEl       = document.querySelector('#js-cube');
    this.cubeSquashEl = document.querySelector('#js-cube-squash');
    this.shadowEl     = document.querySelector('#js-shadow');
    this.sceneEl      = document.querySelector('#js-cube-scene');
    this.translateY   = 500;
    this.duration     = 2000;
    this.delay        = 0;
  },
  createTween: function () { this.cubeMainTween = new mojs.Tween; },

  initChildScenes: function () {
    cubeFall.init(this);
    cubeAnticipation.init(this);
  }
}


module.exports = cube;