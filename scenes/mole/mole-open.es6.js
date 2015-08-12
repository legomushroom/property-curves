var mojs     = require('mo-js');

var moleOpen = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.moleMouthEl    = document.querySelector('#js-mole-mouth');
    this.moleBodyEl     = document.querySelector('#js-mole-body');
    this.moleInnerEl    = document.querySelector('#js-mole-inner');

    mojs.h.style(this.moleMouthEl, 'transform', 'scale(0.25)');
  },
  createTween: function () {

    var motionPathStagger = mojs.Stagger(mojs.MotionPath);

    var s = this.s;
    var moleOpenMotionPath = new motionPathStagger({
      // motionBlur: [.2, null, null, null, null],
      delay:      [(this.delay+100)*s, (this.delay+250)*s, (this.delay+250)*s, (this.delay+225)*s, (this.delay+225)*s],
      duration:   [500*s, 450*s, 450*s, 300*s, 300*s],
      path:       [{x: 25, y: -240}, {x: 0, y: -1}, {x: 0, y: -1}, {x: 0, y: -1}, {x: 0, y: -1}],
      curvature:  [{x: '140%', y: '-15%'}, {x: '8000%', y: '-15%'}, {x: '4000%', y: '-15%'}, {x: '6000%'}, {x: '6000%'}],
      el:         [this.moleEl, this.moleHandEl, this.moleHandLeftEl, this.moleGlassesEl, this.moleGlassesLeftEl],
      easing:     ['expo.out', 'expo.out', 'expo.out', 'bounce.out', 'bounce.out']
    });

    var coneEasing = mojs.easing.path('M0,100 C0,100 19.2604909,99.9551166 20.5142238,99.9551166 C22.4949103,-13.4780187 30.6324028,0.551751812 30.6324028,0.551751812 C34.4304749,8.15161955 38.3387131,36.3731334 42.4370999,100 C42.4370999,101.784879 50.525191,-14.4647311 61.3868482,100 C61.3868482,100.758318 66.9909069,43.8552324 74.4543142,100 C74.4543142,100.959118 78.2476568,70.9090718 83.7423864,100 C83.7423864,100 86.5506362,83.5459334 90.2534996,100 C90.2534996,100.758318 91.893059,90.3911797 94.5652129,100 C94.5652129,100.155918 95.9831925,95.5454201 97.8710986,100 C97.8710986,100.155918 99.1048209,98.0723403 100,100');
    var coneTween = new mojs.Tween({
      delay:    (this.delay+0)*this.s,
      duration: 1200*this.s,
      onUpdate: (p) => {
        var coneP = coneEasing(p);
        mojs.h.style(this.moleConeEl,   'transform', `rotateX(${140*coneP}deg) rotateY(${-20*coneP}deg) translateY(${-6*coneP}px)`);
        mojs.h.style(this.moleConeShadowEl, {
          opacity:   1 - coneP,
          transform: `scaleX(${1-mojs.easing.cubic.in(coneP)}) translateZ(0)`
        });
      }
    });

    var stretchCurve = mojs.easing.path('M0,0 C0,0 31.4848633,29.7739254 55.2021484,-4.28613761e-07 C74.9160156,-20.18457 100,0 100,0');
    var stretchTween = new mojs.Tween({
      delay:    (this.delay+0)*this.s,
      duration: 500*this.s,
      onUpdate: (p) => {
        var stretchP = stretchCurve(p);
        var inv = 1+(1-stretchP);
        mojs.h.setPrefixedStyle(this.moleInnerEl, 'transform', `scaleX(${stretchP}) scaleY(${inv}) translateZ(0)`);
      }
    });

    this.moleTimeline.add( moleOpenMotionPath, coneTween, stretchTween );
  },

  initChildScenes: function () {
  }
}


module.exports = moleOpen;
