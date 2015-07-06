var mojs     = require('mo-js');

// SCENES
var moleRantingTongue = {
  init: function (proto) {
    proto && Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars: function () { this.delay = 25; this.duration = 2000; },
  createTween: function () {
    var skewCurve  = mojs.easing.path('M0,99.669978 C0,99.669978 11.4803316,66.6625278 24.0949898,99.6699775 C36.709648,132.677427 100,99.669978 100,99.669978');
    var handCurve  = mojs.easing.path('M0,-3.55271368e-14 C10.9545898,-40.8999024 23.9307575,-0.575683661 23.930758,0.136022468 C23.9307575,99.5087928 23.9307575,123.533199 42.6040039,123.533196 C60.4672852,123.533196 100,116.78222 100,116.78222');
    var mouthCurve = mojs.easing.path('M0,0.300003052 C0,-118.289845 23.9999996,0.30000305 23.9999996,0.30000305 C23.9999996,0.30000305 28.9929691,57.0874986 31.8132816,63.7992219 C86.0328155,57.0874986 100,72.5585908 100,72.5585908');
    var noizeCurve = mojs.easing.path('M0,99.05 L24.2114672,99.1070023 L27.0786839,106.049107 L29.2555809,92.7589286 L32.0340385,103.220982 L35.3459816,94.0055804 L38.3783493,102.496652 L41.0513382,95.3588169 L43.7739944,106.049107 L45.6729927,96.3013392 L50,104.487165 L53.3504448,92.7589286 L57.7360497,103.220982 L60.8616066,95.3588169 L65.0345993,102.496652 L68.6997757,96.9146207 L71.6646194,101.435268 L75.0262299,95.3588169 L78.0089264,104.487165 L81.2276764,92.7589286 L84.390625,102.496652 L85.7360458,95.3588169 L88.4709854,101.435268 L90.9453125,96.3013392 L94.2198639,103.220982 L96.1110458,94.0055804 L100,99.05');
    var saliva = new mojs.Burst({
      parent:       this.moleEl,
      type:         'circle',
      fill:         'white',
      duration:     (this.duration/1.3)*this.s,
      x: 145,       y: 105,
      delay:        `stagger(${(this.delay+(this.duration/4))*this.s}, rand(50, 100))`,
      degree:       0,
      angle:        {75: 150},
      isSwirl:      true,
      randomRadius: .75,
      radius:       {0:150},
      count:        17,
      childOptions: {
        radius:     { 'rand(1,2)' : 0},
        duration:   300*this.s,
        // opacity:    {.7: .25},
      }
    });

    saliva.el.style['z-index'] = 10;

    mojs.h.style(this.moleMouthEl, 'transform-origin', `right center`);
    var tween = new mojs.Tween({
      delay:    this.delay*this.s,
      duration: this.duration*this.s,
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

        // console.log(p);
      }
    });
    tween.start();
    // this.moleRantingTween.append(tween);
  }
}


module.exports = moleRantingTongue;