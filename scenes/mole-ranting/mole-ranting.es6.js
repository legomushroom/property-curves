var mojs     = require('mo-js');
var tongue   = require('./mole-ranting-tongue.es6.js');

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
    this.moleTongueEl     = document.querySelector('#js-mole-tongue');
    this.moleTonguePath   = document.querySelector('#js-mole-tongue-path');
    this.moleEyeEl        = document.querySelector('#js-mole-eye');
    this.moleEyeLashEl    = document.querySelector('#js-mole-eye-lash');

    this.handAngle = -175;
    this.handRantingDuration = 1500;
  },
  createTween: function () {
    this.moleRantingTween = new mojs.Timeline;
  },
  initChildScenes: function () {
    moleRantingHand.init(this);
    tongue.init(this);
    this.mainTween.add(this.moleRantingTween);
  }
}


module.exports = moleRanting;