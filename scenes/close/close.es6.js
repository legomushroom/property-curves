var mojs     = require('mo-js');

var close = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.s = 1;
    // this.initChildScenes();
  },
  vars: function () {

    this.moleInnerEl = document.querySelector('#js-mole-inner');

  },
  createTween: function () {
    this.closeTimeline = new mojs.Timeline({ delay: 1500*this.s });

    var squashC   = mojs.easing.path('M0.16796875,99.7960938 C0.16796875,99.7960938 14.3071289,213.003902 31.3071289,99.796093 C31.3071289,99.796093 50.0839844,-10.7578125 65,99.796093 C70.9140625,99.796093 63.5068359,99.796093 68,99.796093 C74.7167969,65.8085937 89.9068087,50 100,50');
    var positionC = mojs.easing.path('M0.2140625,99.628125 L19.2007812,99.628125 L64.4995087,50 C64.4995087,50 64.2138641,49.9999999 68.5703094,50 C92.0673798,213.30957 99.9999969,170.315521 99.9999969,510');
    var tween = new mojs.Tween({
      duration: 800*this.s,
      onUpdate: (p) => {
        var squashP   = squashC(p);
        var positionP = positionC(p);
        mojs.h.style( this.moleInnerEl, 'transform', `scale(${ 1 - .35*squashP }, ${ 1 + .35*squashP })` );
        mojs.h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 - 70*positionP}px)` );
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