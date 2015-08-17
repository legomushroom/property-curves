var mojs     = require('mo-js');

// SCENES
var doorOpen         = require('./door-open.es6.js');
var moleOpen         = require('./mole-open.es6.js');

var moleRanting = require('./mole-ranting/mole-ranting.es6.js');
var close       = require('./close/close.es6.js');

var mole = {
  init(proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    this.initChildParts();
    this.mainTween.add(this.moleTimeline);
  },
  vars() {
    this.scene = document.querySelector('#js-mole-scene');
  },
  createTween() {
    console.log(this.cubeDuration);
    this.moleTimeline = new mojs.Timeline({ delay: (this.cubeDuration-1100)*this.s }); },

  initChildScenes() {
    doorOpen.init(this);
    moleOpen.init(this);
  },

  initChildParts() {
    moleRanting.init(this);
    close.init(this);
  }
}


module.exports = mole;