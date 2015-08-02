var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube        = require('./scenes/cube/cube.es6.js')
var mole        = require('./scenes/mole/mole.es6.js')
var moleRanting = require('./scenes/mole-ranting/mole-ranting.es6.js')

var main = {
  s:         1, // global time coefficient
  zHack:     ' translateZ(0) ',
  mainTween: new mojs.Timeline,
  init() {
    this.vars();
    mole.init(this);
    moleRanting.init(this);
    this.mainTween.start();
  },
  vars() {
    this.moleEl         = document.querySelector('#js-mole');
    this.moleHandEl     = document.querySelector('#js-mole-hand');
  }
}

main.init();
