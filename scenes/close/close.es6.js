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
    this.closeTimeline = new mojs.Timeline({ delay: delay*this.s });

    // var squashC    = mojs.easing.path('M0.16796875,99.7960938 C0.16796875,99.7960938 14.3071289,213.003902 31.3071289,99.796093 C31.3071289,99.796093 50.0839844,-10.7578125 65,99.796093 C70.9140625,99.796093 63.5068359,99.796093 68,99.796093 C74.7167969,65.8085937 89.9068087,50 100,50');
    var positionC  = mojs.easing.path('M2.9811531e-09,99.6281242 C6.32890625,99.6281242 3.53925782,99.6281242 9.86816407,99.6281242 C9.86816407,50.1196289 31.8476563,50.1196289 31.8476563,50.1196289 C31.8476563,50.1196289 7.02490234,50.1196289 43.6933594,50.1196289 C40.4775391,50.1196289 100,43.3066406 100,420');
    // var doorAngleC = mojs.easing.path('M0.304199219,100 C0.304199219,100 16,132.709961 31,100 C31,100 37.6191406,84.2036133 68,89.3833008 C70.0009766,89.3833008 93.6054688,100 100,50');
    var tween = new mojs.Tween({
      duration: 800*this.s,
      onUpdate: (p) => {
        // var squashP   = squashC(p);
        var positionP = positionC(p);
        // mojs.h.style( this.moleInnerEl, 'transform', `skewX(${9*(1-p)}deg) scale(${ 1 - .35*squashP }, ${ 1 + .35*squashP })` );
        mojs.h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 - 70*positionP}px)` );

        // var doorAngleP = doorAngleC(p);
        
        // mojs.h.style( this.doorEl, 'transform', `rotateY(${ -125 + 254*doorAngleP }deg) scaleX(${.75 + .25*mojs.easing.expo.in(p)}) translate(${8*mojs.easing.expo.in(p)}px, ${8*mojs.easing.expo.in(p)}px)` );
        // mojs.h.style( this.doorShadowEl, 'transform', `scaleX(${1 - 1.65*doorAngleP})` );
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