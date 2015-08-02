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
    var handAngleCurve = e.path('M0,0.0557234763 L7.9453125,0.158137605 L7.9453125,-62.2096335 L27.0139179,-62.2096335 L27.0139179,66.661464 L45.9410019,66.661464 L45.9410012,-0.27805839 L45.9410019,-94.524739 L100.009766,-94.524739');
    var bodySkewC = e.path('M0.506500786,99.4107635 C0.506500786,99.4107635 5.85142524,99.4107621 7.9810887,99.4107621 C7.9810887,66.899765 18.5815826,-9.81235939 32.5697561,49.5905614 C35.5946623,49.5905603 41.0047155,49.5905613 41.0047155,49.5905613 C41.0047155,49.5905613 43.2578207,-33.4936176 64.710198,0.141452075 C80.8868719,0.141451976 100.481854,0.14145211 100.481854,0.14145211');
    var tween = new mojs.Tween({
      delay:    200*this.s,
      duration: 1600*this.s,
      onUpdate: (p)=> {
        
        mojs.h.style(this.moleEl, 'transform', `skewX(${8*bodySkewC(p)}deg) translateX(${-10*bodySkewC(p)}px)`);

        mojs.h.style(this.moleHandEl, 'transform', `rotate(${33 + 60*bodySkewC(p)}deg)`);
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