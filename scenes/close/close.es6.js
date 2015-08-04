var mojs     = require('mo-js');

var close = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.s = 150;
    // this.initChildScenes();
  },
  vars: function () {

    this.moleInnerEl = document.querySelector('#js-mole-inner');

  },
  createTween: function () {
    this.closeTimeline = new mojs.Timeline({ delay: 1500*this.s });

    var squashC = mojs.easing.path('M0.16796875,99.7960938 C0.16796875,99.7960938 19,213.003903 36,99.7960938 C36,99.7960938 54.3695297,-11.1429672 76.1373121,99.7960938 C76.1373121,99.7960938 88.7687531,50 100,50');
    var positionC = mojs.easing.path('M0.2140625,99.628125 L19.2007812,99.628125 L75.9999969,50.0000008 L99.9999969,213.476563');
    var tween = new mojs.Tween({
      duration: 3000*this.s,
      onUpdate: (p) => {
        var squashP   = squashC(p);
        var positionP = positionC(p);
        mojs.h.style( this.moleInnerEl, 'transform', `scale(${ 1 - .25*squashP }, ${ 1 + .25*squashP })` );
        mojs.h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 - 90*positionP}px)` );
      }
    });

    this.closeTimeline.add(tween);

    this.closeTimeline.start();

    // this.mainTween.append(this.closeTimeline);
  },

  initChildScenes: function () {
  }
}


module.exports = close;