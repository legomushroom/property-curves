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

        h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 + 360*cubicInP}px)` );
        (p === 1) && (this.moleEl.style['z-index'] = 0);

        h.style( this.moleInnerEl, 'transform', `skewX(${9*(1-p)}deg) scale(${ 1 - .2*cubicInP }, ${ 1 + .2*cubicInP })` );
        
        h.style( this.moleHandEl, 'transform', `rotate(${94.5 + 100.5*quadInP}deg) scaleY(${1.1 - .1*quadInP}) translateY(${70*quadInP}px)` );
        h.style( this.moleHandLeftEl, 'transform', `rotate(${20 - 20*quadInP}deg) translate(${30 - 35*quadInP}px, ${-10 - 70*quadInP}px)` );

        h.style( this.doorEl, 'transform', `rotateY(${ -125 + 125*cubicInP }deg) scaleX(${.75 + .25*expoInP}) translate(${8*expoInP}px, ${8*expoInP}px)` );
        h.style( this.doorShadowEl, 'transform', `scaleX(${1 - 1.65*cubicInP})` );

        h.style( this.moleConeEl, 'transform', `rotateX(${150*quadInP}deg) rotateY(${-14*quadInP}deg) translateY(${-5*quadInP}px)` );
        this.moleConeShadowEl.style.opacity = 1-p;
        h.style( this.moleHatEl, 'transform', `translateY(${-35*expoInP}px)` );
        this.moleHatEl.style['z-index'] = Math.round(12 - 12*p);

        h.style( this.moleGlassesEl,     'transform', `translateY(${-85*expoInP}px)` );
        h.style( this.moleGlassesLeftEl, 'transform', `translateY(${-85*expoInP}px)` );

        this.moleEyeLashEl.setAttribute('d', `M0,0 Q 6.5 ${10*p}, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2 + 1.5*p);
        mojs.h.style(this.moleEyeEl, 'transform', `translate(${7*p}px, ${-5*p}px) scaleX(${1-.4*p})`);

        mojs.h.style(this.moleMouthInnerEl, 'transform', `scale(${.3 - .3*p})`);

      }
    });
    
    var burstStagger = new mojs.Stagger(mojs.Burst)({
      quantifier:     4,
      // opacity:        [1, .9, .9, .8],
      parent:         this.moleSceneEl,
      x:              [145, 295, 50, 175],
      y:              [75,  25,  25, 0],
      shiftY:         [{0: -65}, {0: -50}, {0: -50}, {0: -35}],
      degree:         50,
      randomRadius:   1,
      randomAngle:    .2,
      angle:         -25,
      isRunLess:      true,
      fill:           'white',
      count:          'rand(3,5)',
      childOptions:   { radius: {'rand(2, 5)': 0} }
    });

    for (module of burstStagger.childModules) { module.el.style['z-index'] = 3; }

    var tween2 = new mojs.Tween({
      duration: 400*this.s,
      onUpdate: (p) => {
        mojs.h.style(this.doorWaveEl, 'transform', `scale(${1.1 + 2*e.cubic.out(p)}) ${this.zHack}`);
        this.doorWaveEl.style.opacity = 1 - e.expo.out(p);
      }
    });

    this.closeTimeline.add(tween);
    this.closeTimeline.append([burstStagger.timeline, tween2]);
    this.closeTimeline.start();

  },

  initChildScenes: function () {
  }
}


module.exports = close;