var mojs     = require('mo-js');

var moleOpen = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    // this.cubeMainTween.start();
  },
  vars: function () {
    // this.delay        = 0;
    this.moleEl         = document.querySelector('#js-mole');
    this.moleHandEl     = document.querySelector('#js-mole-hand');
    this.moleHandLeftEl = document.querySelector('#js-mole-hand-left');
    this.moleGlassesEl  = document.querySelector('#js-mole-glasses');
    this.moleBodyEl     = document.querySelector('#js-mole-body');
    this.moleGlassesLeftEl = document.querySelector('#js-mole-glasses-left');
  },
  createTween: function () {

    var mp = new mojs.MotionPath({
      delay:     (this.delay+100)*this.s,
      duration:  500*this.s,
      path:      {x: 25, y: -240},
      curvature: {x: '140%', y: '-15%'},
      el:        this.moleEl,
      easing:    'expo.out',
      // motionBlur: .2,
      isRunLess: true
    });

    var handMP = new mojs.MotionPath({
      delay:     (this.delay+225)*this.s,
      duration:  400*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '8000%', y: '-15%'},
      el:        this.moleHandEl,
      easing:    'expo.out',
      isRunLess: true
    });

    var handMPLeft = new mojs.MotionPath({
      delay:     (this.delay+225)*this.s,
      duration:  400*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '8000%', y: '-15%'},
      el:        this.moleHandLeftEl,
      easing:    'expo.out',
      isRunLess: true
    });

    var handMPGlasses = new mojs.MotionPath({
      delay:     (this.delay+225)*this.s,
      duration:  300*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '6000%'},
      el:        this.moleGlassesEl,
      easing:    'bounce.out',
      isRunLess: true
    });

    var handMPGlassesLeft = new mojs.MotionPath({
      delay:     (this.delay+225)*this.s,
      duration:  300*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '6000%'},
      el:        this.moleGlassesLeftEl,
      easing:    'bounce.out',
      isRunLess: true
    });

    var scaleStart = .95;
    var bodyTween = new mojs.Tween({
      delay: (this.delay+300)*this.s,
      duration: 1200*this.s,
      onStart: () => {
        // mojs.h.setPrefixedStyle(this.moleBodyEl, 'transform', `scaleX(${scaleStart})`);
      },
      onUpdate: (p) => {
        // mojs.h.setPrefixedStyle(this.moleBodyEl, 'transform', `scaleX(${1+(.05*mojs.easing.elastic.in(1-p))})`);
      }
    });

    this.moleTween.add( mp.tween, handMP.tween,
                        handMPLeft.tween, handMPGlasses.tween,
                        handMPGlassesLeft.tween, bodyTween);
  },

  initChildScenes: function () {
  }
}


module.exports = moleOpen;