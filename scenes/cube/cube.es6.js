var mojs     = require('mo-js');

// SCENES
var cubeFall         = require('./cube-fall.es6.js'),
    cubeFallEffects  = require('./cube-fall-effects.es6.js'),
    cubeAnticipation = require('./cube-anticipation.es6.js');

var cube = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.cubeEl             = document.querySelector('#js-cube');
    this.cubeSquashEl       = document.querySelector('#js-cube-squash');
    this.shadowEl           = document.querySelector('#js-shadow');
    this.cubeSceneEl        = document.querySelector('#js-cube-scene');
    this.translateY         = 700;
    this.fallDuration       = 2000;
    this.delay              = 0;
  },
  createTween: function () { this.cubeMainTween = new mojs.Timeline; },

  initChildScenes: function () {
    cubeFall.init(this);
    cubeAnticipation.init(this);
    this.mainTween.add(this.cubeMainTween);
  }
}


module.exports = cube;