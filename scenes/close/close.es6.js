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
    var e = mojs.easing, h = mojs.h;
    this.closeTimeline = new mojs.Timeline({ delay: delay*this.s });

    var tween = new mojs.Tween({
      duration: 600*this.s,
      onUpdate: (p) => {

        var cubicInP = e.cubic.in(p);
        var quadInP  = e.quad.in(p);
        var expoInP  = e.expo.in(p);

        h.style( this.moleInnerEl, 'transform', `skewX(${9*(1-p)}deg) scale(${ 1 - .2*cubicInP }, ${ 1 + .2*cubicInP })` );
        h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 + 260*cubicInP}px)` );
        this.moleEl.style['z-index'] = 2 - 2*p;
        h.style( this.moleHandEl, 'transform', `rotate(${94.5 + 100.5*quadInP}deg) scaleY(${1.1 - .1*quadInP})` );
        h.style( this.moleHandLeftEl, 'transform', `rotate(${20 - 20*quadInP}deg) translate(${30 - 35*quadInP}px, ${-10 - 25*quadInP}px)` );

        h.style( this.doorEl, 'transform', `rotateY(${ -125 + 125*cubicInP }deg) scaleX(${.75 + .25*expoInP}) translate(${8*expoInP}px, ${8*expoInP}px)` );
        h.style( this.doorShadowEl, 'transform', `scaleX(${1 - 1.65*cubicInP})` );

        h.style( this.moleConeEl, 'transform', `rotateX(${130*quadInP}deg)` );
        this.moleConeShadowEl.style.opacity = 1-p;

        h.style( this.moleGlassesEl,     'transform', `translateY(${-35*expoInP}px)` );
        h.style( this.moleGlassesLeftEl, 'transform', `translateY(${-35*expoInP}px)` );


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