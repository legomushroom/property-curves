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
    this.moleConeEl     = document.querySelector('#js-mole-hat-cone');
    this.moleShadowEl   = document.querySelector('#js-mole-hat-shadow');
    this.moleInnerEl    = document.querySelector('#js-mole-inner');
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
      motionBlur: .1,
      isRunLess: true
    });

    var handMP = new mojs.MotionPath({
      delay:     (this.delay+250)*this.s,
      duration:  450*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '8000%', y: '-15%'},
      el:        this.moleHandEl,
      easing:    'expo.out',
      isRunLess: true
    });

    var handMPLeft = new mojs.MotionPath({
      delay:     (this.delay+250)*this.s,
      duration:  450*this.s,
      path:      {x: 0, y: -1},
      curvature: {x: '4000%', y: '-15%'},
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

    // var scaleStart = .97;
    // var bodyTween = new mojs.Tween({
    //   delay: (this.delay+300)*this.s,
    //   duration: 1200*this.s,
    //   onStart: () => {
    //     mojs.h.setPrefixedStyle(this.moleBodyEl, 'transform', `scaleX(${scaleStart})`);
    //   },
    //   onUpdate: (p) => {
    //     mojs.h.setPrefixedStyle(this.moleBodyEl, 'transform', `scaleX(${1+(1-scaleStart)*mojs.easing.elastic.in(1-p)})`);
    //   }
    // });

    var coneEasing = mojs.easing.path('M0,100 C0,100 19.2604909,99.9551166 20.5142238,99.9551166 C22.4949103,-13.4780187 30.6324028,0.551751812 30.6324028,0.551751812 C34.4304749,8.15161955 38.3387131,36.3731334 42.4370999,100 C42.4370999,101.784879 50.525191,-14.4647311 61.3868482,100 C61.3868482,100.758318 66.9909069,43.8552324 74.4543142,100 C74.4543142,100.959118 78.2476568,70.9090718 83.7423864,100 C83.7423864,100 86.5506362,83.5459334 90.2534996,100 C90.2534996,100.758318 91.893059,90.3911797 94.5652129,100 C94.5652129,100.155918 95.9831925,95.5454201 97.8710986,100 C97.8710986,100.155918 99.1048209,98.0723403 100,100');
    var coneTween = new mojs.Tween({
      delay:    (this.delay+0)*this.s,
      duration: 1200*this.s,
      onUpdate: (p) => {
        var coneP = coneEasing(p);
        this.moleShadowEl.style.opacity = 1 - coneP;
        // transform rotateX(140deg) rotateY(-20deg) translateY(-6px)
        mojs.h.setPrefixedStyle(this.moleConeEl,   'transform', `rotateX(${140*coneP}deg) rotateY(${-20*coneP}deg) translateY(${-6*coneP}px)`);
        mojs.h.setPrefixedStyle(this.moleShadowEl, 'transform', `scaleX(${1-mojs.easing.cubic.in(coneP)})`);
      }
    });

    var stretchEasing = mojs.easing.path('M0,0 C0,0 31.4848633,29.7739254 55.2021484,-4.28613761e-07 C74.9160156,-20.18457 100,0 100,0');
    // var stretchEasing = mojs.easing.path('M0,0 C0,0 52.6318359,27.5279318 75.7575758,0 C75.7575758,0 90.005524,-24.2220682 100,0');
    // var stretchEasing = mojs.easing.path('M0,0 C0,0 61.9794922,64.1833801 68.0356445,0.357204547 C68.0356445,0.357204547 72.7907199,-45.446506 82.2429907,0 C82.2831087,0.598512638 87.5584112,28.1076928 93.4812171,0.357205607 C93.4579439,0 96.8984736,-15.392795 100,0');
    var stretchTween = new mojs.Tween({
      delay:    (this.delay+0)*this.s,
      duration: 500*this.s,
      onUpdate: (p) => {
        var stretchP = stretchEasing(p);
        var inv = 1+(1-stretchP)
        mojs.h.setPrefixedStyle(this.moleInnerEl, 'transform', `scaleX(${stretchP}) scaleY(${inv})`);
      }
    });

    this.moleTween.add( mp.tween, handMP.tween,
                        handMPLeft.tween, handMPGlasses.tween,
                        handMPGlassesLeft.tween,
                        coneTween, stretchTween);
  },

  initChildScenes: function () {
  }
}


module.exports = moleOpen;