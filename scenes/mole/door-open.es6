var mojs     = require('mo-js');

var mole = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.cubeMainTween.start();
  },
  vars: function () {
    // this.cubeEl       = document.querySelector('#js-cube');
    // this.cubeSquashEl = document.querySelector('#js-cube-squash');
    // this.shadowEl     = document.querySelector('#js-shadow');
    // this.sceneEl      = document.querySelector('#js-cube-scene');
    // this.translateY   = 500;
    // this.duration     = 2000;
    // this.delay        = 0;
  },
  createTween: function () { }
}


module.exports = mole;