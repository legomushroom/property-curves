var mojs     = require('mo-js');
var tongue   = require('./mole-ranting-tongue.es6.js');

var moleRantingHand   = require('./mole-ranting-hand.es6.js');
var moleRantingSearch = require('./mole-ranting-search.es6.js');

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
    this.moleTongueEl   = document.querySelector('#js-mole-tongue');
    this.moleTonguePath = document.querySelector('#js-mole-tongue-path');

    this.handAngle = -175;
    this.handRantingDuration = 1500;
  },
  createTween: function () {
    this.moleRantingTween = new mojs.Timeline;
  },
  initChildScenes: function () {
    moleRantingHand.init(this);
    tongue.init(this);
    moleRantingSearch.init(this);
    this.moleTimeline.add(this.moleRantingTween);
    // this.mainTween.add(this.moleRantingTween);
  }
}


module.exports = moleRanting;