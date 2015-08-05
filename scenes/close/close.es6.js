var mojs     = require('mo-js');

var close = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars: function () {
    this.moleInnerEl = document.querySelector('#js-mole-inner');
    this.s = 1;
  },
  createTween: function () {
    var delay = (this.s > 1) ? 0 : 1500 ;
    var e = mojs.easing;
    this.closeTimeline = new mojs.Timeline({ delay: delay*this.s });

    var squashC    = mojs.easing.path('M0.345703125,99.6484375 C0.345703125,99.6484375 30.0000004,30.9408474 27,99.6484375 C52.7142868,79.083147 100,50 100,50');
    var positionC  = mojs.easing.path('M2.9811531e-09,99.6281242 C2.9811531e-09,50.1196289 26.1806641,50 26.1806641,50 C26.1806641,50 81.1894531,44.8525391 100,425');
    // var doorAngleC = mojs.easing.path('M0.304199219,100 C0.304199219,100 16,132.709961 31,100 C31,100 37.6191406,84.2036133 68,89.3833008 C70.0009766,89.3833008 93.6054688,100 100,50');
    var tween = new mojs.Tween({
      duration: 600*this.s,
      onUpdate: (p) => {
        var squashP   = squashC(p);
        var positionP = positionC(p);
        // mojs.h.style( this.moleInnerEl, 'transform', `skewX(${9*(1-p)}deg) scale(${ 1 - .35*squashP }, ${ 1 + .35*squashP })` );
        // mojs.h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 - 70*positionP}px)` );
        mojs.h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 + 260*e.cubic.in(p)}px) scale(${ 1 - .2*e.cubic.in(p) }, ${ 1 + .2*e.cubic.in(p) })` );
        mojs.h.style( this.moleHandEl, 'transform', `rotate(${94.5 + 100.5*e.quad.in(p)}deg) scaleY(1.1)` );
        mojs.h.style( this.moleHandLeftEl, 'transform', `rotate(${20 - 20*e.quad.in(p)}deg) translate(${30 - 35*e.quad.in(p)}px, ${-10 - 25*e.quad.in(p)}px)` );

        // var doorAngleP = doorAngleC(p);
        
        mojs.h.style( this.doorEl, 'transform', `rotateY(${ -125 + 125*e.cubic.in(p) }deg) scaleX(${.75 + .25*mojs.easing.expo.in(p)}) translate(${8*mojs.easing.expo.in(p)}px, ${8*mojs.easing.expo.in(p)}px)` );
        mojs.h.style( this.doorShadowEl, 'transform', `scaleX(${1 - 1.65*e.cubic.in(p)})` );
        // mojs.h.style( this.moleHandEl, 'transform', `rotate(${94.5 - 94.5*doorAngleP}deg)` );

        // mojs.h.style( this.moleHandLeftEl, 'transform', `rotate(${20 - 40*squashP}deg) translate(${30 - 35*squashP}px, ${-10 - 25*squashP}px)` );
        // mojs.h.style( this.moleHandEl, 'transform', `rotate(${94.5 + 110*p}deg) scaleY(1.1)` );

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