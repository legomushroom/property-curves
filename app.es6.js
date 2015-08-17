var mojs = require('mo-js');
require('./css/styles.styl');

// SCENES
var cube        = require('./scenes/cube/cube.es6.js');
var mole        = require('./scenes/mole/mole.es6.js');

var main = {
  s:            1, // global time coefficient
  zHack:        ' translateZ(0) ',
  mainTween:    new mojs.Timeline({ repeat: 999999, delay: 1000 }),
  delay:        0,
  cubeDuration: 3900,
  isSound:      false,
  init() {
    this.vars();
    cube.init(this)
    mole.init(this);
    this.mainTween.start();
  },
  vars() {
    this.sceneEl            = document.querySelector('#js-mole-scene');
    this.moleEl             = document.querySelector('#js-mole');
    this.moleHatEl          = document.querySelector('#js-mole-hat');
    this.moleConeEl         = document.querySelector('#js-mole-hat-cone');
    this.moleConeShadowEl   = document.querySelector('#js-mole-hat-shadow');
    this.moleGlassesEl      = document.querySelector('#js-mole-glasses');
    this.moleGlassesLeftEl  = document.querySelector('#js-mole-glasses-left');
    this.moleMouthEl        = document.querySelector('#js-mole-mouth');
    this.moleMouthInnerEl   = document.querySelector('#js-mole-mouth-inner');
    this.moleMouthOuterEl   = document.querySelector('#js-mole-mouth-outer');
    this.moleHandEl         = document.querySelector('#js-mole-hand');
    this.moleHandLeftEl     = document.querySelector('#js-mole-hand-left');
    this.moleHandCircleEl   = document.querySelector('#js-mole-hand-circle');
    this.doorEl             = document.querySelector('#js-door');
    this.doorShadowEl       = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
    this.moleEyeEl          = document.querySelector('#js-mole-eye');
    this.moleEyeLashEl      = document.querySelector('#js-mole-eye-lash');
    this.moleSceneEl        = document.querySelector('#js-mole-scene');
    this.doorWaveEl         = document.querySelector('#js-door-wave');
  }
}

main.init();
