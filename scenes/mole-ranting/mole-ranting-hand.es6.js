var mojs     = require('mo-js');

// SCENES
var moleRantingHand = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars: function () { },
  createTween: function () {
    var tween = new mojs.Tween({
      onUpdate: function (p) {
      }
    });
    tween.start();
  }
  // initChildScenes: function () {
  //   moleRantingHand.init(this);
  //   this.moleRantingTween.start();
  // }
}


module.exports = moleRantingHand;