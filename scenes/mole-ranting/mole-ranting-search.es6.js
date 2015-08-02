var mojs     = require('mo-js');

// SCENES
var moleRantingSearch = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.s = 1;
    // this.delay = (this.s < 5) ? 1400 : 0;
  },
  createTween: function () {
    var timeLine = new mojs.Timeline;
    
    var e = mojs.easing;
    // var handAngleCurve = e.path('M0,0.0557234763 L7.9453125,0.158137605 L7.9453125,-62.2096335 L27.0139179,-62.2096335 L27.0139179,66.661464 L45.9410019,66.661464 L45.9410012,-0.27805839 L45.9410019,-94.524739 L100.009766,-94.524739');
    var bodySkewC = e.path('M0.506500786,99.4107635 C0.506500786,99.4107635 5.85142524,99.4107621 7.9810887,99.4107621 C7.9810887,66.899765 18.5815826,-9.81235939 32.5697561,49.5905614 C34.3447271,56.1428608 40.36649,56.1939167 41.0047155,49.5905613 C42.965489,30.0062046 44.1572271,-22.244141 59.113501,-7.025553 C62.059815,-3.8203124 60.6154791,0.141451938 64.710198,0.141452075 C65.4163407,0.141452071 66.1289969,0.141452067 66.8462524,0.141452063 C82.5602506,0.141451987 100.481854,0.14145211 100.481854,0.14145211');
    var tween = new mojs.Tween({
      delay:    200*this.s,
      duration: 1300*this.s,
      onUpdate: (p)=> {
        
        mojs.h.style(this.moleEl, 'transform', `skewX(${9*bodySkewC(p)}deg) scale(${1-.01*bodySkewC(p)}, ${1+.01*bodySkewC(p)}) translateX(${-7*bodySkewC(p)}px) rotateY(${-10*bodySkewC(p)}deg)`);

        mojs.h.style(this.moleHandEl, 'transform', `rotate(${33 + 60*bodySkewC(p)}deg) scaleY(${1+.07*bodySkewC(p)})`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${20*bodySkewC(p)}deg) translate(${24*bodySkewC(p)}px, ${-10*bodySkewC(p)}px)`);


      }
    });

    timeLine.add(tween);
    this.moleRantingTween.append(timeLine);
  },
  initChildScenes: function () {
    // tongue.init(this);
  }
}


module.exports = moleRantingSearch;