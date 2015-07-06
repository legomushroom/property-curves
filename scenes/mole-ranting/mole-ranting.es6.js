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
    this.scene          = document.querySelector('#js-mole-scene');
    this.moleEl         = document.querySelector('#js-mole-inner');
    this.moleHandEl     = document.querySelector('#js-mole-hand');
    this.moleConeEl     = document.querySelector('#js-mole-hat-cone');
    this.moleGlassesEl  = document.querySelector('#js-mole-glasses');
    this.moleGlassesLeftEl = document.querySelector('#js-mole-glasses-left');
    this.moleMouthEl      = document.querySelector('#js-mole-mouth');
    this.moleMouthInnerEl = document.querySelector('#js-mole-mouth-inner');
    this.moleMouthOuterEl = document.querySelector('#js-mole-mouth-outer');
    this.moleHandLeftEl   = document.querySelector('#js-mole-hand-left');
  },
  createTween: function () {
    this.moleRantingTween = new mojs.Tween();
  },
  initChildScenes: function () {
    moleRantingHand.init(this);
    this.moleRantingTween.start();
  }
}


module.exports = moleRanting;