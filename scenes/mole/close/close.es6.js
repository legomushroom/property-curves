var mojs     = require('mo-js');
var {Howl}   = require('howler');

var close = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars() {
    this.moleInnerEl = document.querySelector('#js-mole-inner');
    this.doorCloseSound = new Howl({ urls: ['sounds/door-close-1.wav'], rate: 1.5, volume: .65 });
    this.boomSound = new Howl({ urls: [ './sounds/fall-kick-1.wav' ], rate: .5 });
    this.fallingSound = new Howl({ urls: [ './sounds/falling-1.wav' ], rate: 4.5, volume: .05 });
  },

  resetParts() {
    // this.moleEl.style['z-index'] = 0;
  },

  createTween() {
    var delay = 4400;
    var e = mojs.easing, h = mojs.h;
    this.closeTimeline = new mojs.Timeline({ delay: delay*this.s });

    var closeSoundLauncher = new mojs.Tween({
      duration: 50,
      delay: 150*this.s,
      onStart: ()=> { this.isSound && this.doorCloseSound.play(); this.isSound && this.fallingSound.play(); }
    });

    var moveDownTween = new mojs.Tween({
      duration: 600*this.s,
      onStart: () => { this.moleHandCircleEl.style.opacity = 1; },
      onComplete: () => {
        this.resetParts();
        this.moleHandCircleEl.style.opacity = 0;
        h.style( this.moleHandEl, 'transform', '' );
        h.style( this.moleHatEl,  'transform', '' );
        this.moleHatEl.style['z-index'] = 4;
        this.moleEyeLashEl.setAttribute('d', `M0,0 Q 6.5 10, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2);
        mojs.h.style(this.moleEyeEl, 'transform', '');
        h.style( this.moleGlassesEl,     'transform', '' );
        h.style( this.moleGlassesLeftEl, 'transform', '' );
      },
      onUpdate: (p) => {

        var cubicInP = e.cubic.in(p);
        var quadInP  = e.quad.in(p);
        var expoInP  = e.expo.in(p);

        h.style( this.moleEl, 'transform', `translate(${25}px, ${-240 + 360*cubicInP}px)` );
        // (p === 1) && (this.moleEl.style['z-index'] = 0);

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

    var doorWaveTween = new mojs.Tween({
      duration: 400*this.s,
      onUpdate: (p) => {
        mojs.h.style(this.doorWaveEl, 'transform', `scale(${1.1 + 2*e.cubic.out(p)}) ${this.zHack}`);
        this.doorWaveEl.style.opacity = 1 - e.expo.out(p);
      }
    });

    var noiseCurve = mojs.easing.path('M0.259486607,100.071429 C0.259486607,100.071429 4.27680653,83.4402907 6.90123802,100.071429 C9.52566951,116.702566 13.5373987,100.071429 13.5373987,100.071429 C13.5373987,100.071429 16.7628232,87.9112723 21.6735437,100.071429 C26.5842642,112.231585 30.9212118,100.071429 30.9212118,100.071429 C30.9212118,100.071429 37.4556606,76.8219874 36.8193484,100.071429 C36.1830363,123.32087 44.2583534,100.071429 44.2583534,100.071429 C44.2583534,100.071429 52.7238326,76.230468 58.7731881,100.071429 C64.8225436,123.912389 71.8496108,100.071429 71.8496108,100.071429 C71.8496108,100.071429 76.8389838,84.6718743 77.5101727,100.071429 C78.1813616,115.470983 86.7695435,100.071429 86.7695435,100.071429 C86.7695435,100.071429 90.9161334,91.365514 92.5121951,100.071429 C94.1082567,108.777343 97.4553275,100.071429 97.4553275,100.071429 C97.4553275,100.071429 98.5630678,96.4871648 100.000003,100.071429');
    var noiseTween = new mojs.Tween({
      duration: 200*this.s,
      onStart: () => { this.isSound && this.boomSound.play(); },
      onUpdate: (p)=> {
        mojs.h.style(this.sceneEl, 'transform', `translate(${noiseCurve(p)*40}px, ${-noiseCurve(p)*20}px) ${this.zHack}`);
      }
    });

    this.closeTimeline
      .add(moveDownTween, closeSoundLauncher)
      .append([burstStagger.timeline, doorWaveTween, noiseTween]);
    this.moleTimeline.add(this.closeTimeline);

  },

  initChildScenes: function () {
  }
}


module.exports = close;