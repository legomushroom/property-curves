var mojs     = require('mo-js');

// SCENES
var moleRantingTongue = {
  init: function (proto) {
    proto && Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars: function () { this.delay = 1500+this.handRantingDuration-250; this.duration = 1800; },
  createTween: function () {
    var skewCurve  = mojs.easing.path('M0,100 C0,100 18.1450901,69.0663515 24.0949898,99.9609384 C30.0448895,130.855525 100,100 100,100');
    var handCurve  = mojs.easing.path('M0,-3.55271368e-14 C10.9545898,-40.8999024 23.9307575,-0.575683661 23.930758,0.136022468 C23.9307575,99.5087928 23.9307575,123.533199 42.6040039,123.533196 C47.594178,123.533196 54.2372213,123.00636 61.2202377,122.247035 C61.5346348,122.212848 63.3167217,121.96483 65.9540934,121.59172 C76.2346029,120.13733 99.5107422,116.78222 99.5107422,116.78222');
    var mouthCurve = mojs.easing.path('M0,0.300003052 C0,-118.289845 23.9999996,0.30000305 23.9999996,0.30000305 C23.9999996,0.30000305 28.9929691,57.0874986 31.8132816,63.7992219 C86.0328155,57.0874986 100,72.5585908 100,72.5585908');
    var noizeCurve = mojs.easing.path('M0,99.05 L24.2114672,99.1070023 L27.0786839,106.049107 L29.2555809,92.7589286 L32.0340385,103.220982 L35.3459816,94.0055804 L38.3783493,102.496652 L41.0513382,95.3588169 L43.7739944,106.049107 L45.6729927,96.3013392 L50,104.487165 L53.3504448,92.7589286 L57.7360497,103.220982 L60.8616066,95.3588169 L65.0345993,102.496652 L68.6997757,96.9146207 L71.6646194,101.435268 L75.0262299,95.3588169 L78.0089264,104.487165 L81.2276764,92.7589286 L84.390625,102.496652 L85.7360458,95.3588169 L88.4709854,101.435268 L90.9453125,96.3013392 L94.2198639,103.220982 L96.1110458,94.0055804 L100,99.05');

    var saliva = new mojs.Burst({
      parent:       this.moleEl,
      type:         'circle',
      fill:         'white',
      duration:     (this.duration/1.3)*this.s,
      x: 145,       y: 105,
      delay:        `stagger(${(this.duration/4)*this.s}, rand(50, 100))`,
      degree:       0,
      angle:        {75: 150},
      isSwirl:      true,
      randomRadius: .75,
      radius:       {0:150},
      count:        16,
      isRunLess:    true,
      childOptions: {
        radius:     { 'rand(.5,2)' : 0},
        duration:   300*this.s,
        // opacity:    {.7: .25},
      }
    });

    saliva.el.style['z-index'] = 10;
    // console.log(this.handAngle);

    mojs.h.style(this.moleMouthEl, 'transform-origin', `right center`);
    var tween = new mojs.Tween({
      delay:    this.delay*this.s,
      duration: this.duration*this.s,
      onStart: function () { saliva.run(); },
      onUpdate: (p)=> {
        var skewP  = skewCurve(p);
        var handP  = handCurve(p);
        var mouthP = mouthCurve(p);
        var noizeP = noizeCurve(p);

        mojs.h.style(this.moleEl, 'transform', `skewX(${(75*skewP)-(5*noizeP)}deg) skewY(${15*noizeP}deg)`);
        mojs.h.style(this.moleHandEl, 'transform', `rotate(${(this.handAngle*handP)+(30*noizeP)}deg)`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${(100*skewP)-(15*noizeP)}deg) translateY(${(-100*skewP)}px)`);
        mojs.h.style(this.moleMouthEl, 'transform', `scale(${mouthP+(3*noizeP)}) translate(${-30*skewP}px, 0)`);
        mojs.h.style(this.moleGlassesEl, 'transform', `translateY(${20*noizeP}px)`);
        mojs.h.style(this.moleGlassesLeftEl, 'transform', `translateY(${10*noizeP}px)`);
        mojs.h.style(this.moleConeEl, 'transform', `rotateZ(${20*noizeP}deg)`);
        mojs.h.style(this.moleTongueEl, 'transform', `translate(${-140*skewP}px, 0)`);
        this.moleTonguePath.setAttribute('d', `M0 30 Q 20 ${10+(550*noizeP)}, 30 25 T 50 30`);
      }
    });
    // tween.start();
    this.moleRantingTween.add(tween);
  }
}


module.exports = moleRantingTongue;