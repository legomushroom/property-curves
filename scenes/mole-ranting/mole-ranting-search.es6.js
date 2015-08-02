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

    this.doorEl             = document.querySelector('#js-door');
    this.doorShadowEl       = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
    // this.delay = (this.s < 5) ? 1400 : 0;
  },
  createTween: function () {
    var timeLine = new mojs.Timeline;
    
    var e = mojs.easing;
    // var handAngleCurve = e.path('M0,0.0557234763 L7.9453125,0.158137605 L7.9453125,-62.2096335 L27.0139179,-62.2096335 L27.0139179,66.661464 L45.9410019,66.661464 L45.9410012,-0.27805839 L45.9410019,-94.524739 L100.009766,-94.524739');
    var bodySkewC = e.path('M0.506500786,99.4107635 C0.506500786,99.4107635 5.85142524,99.4107621 7.9810887,99.4107621 C7.9810887,66.899765 14.0576168,-39.8300779 32.375588,23.1162121 C34.150559,29.6685115 40.0307601,29.7045647 40.8105474,23.116212 C49.0488287,-46.488282 57.7949224,0.14145211 66.8462524,0.141452063 C79.10852,0.14145202 100.481854,0.14145211 100.481854,0.14145211');
    var riseC = e.path('M0.504882812,99.4550781 L8.29748693,99.4550781 C19.3574219,34.4345703 32.1187229,99.4550794 32.1187235,99.4550781 C32.1187235,99.4550781 37.9296875,122.487303 43.1708984,99.4550794 C51.9283709,10.3408208 63.429554,94.8232407 63.4295529,99.4550781 C67.7822266,127.167966 76.9882812,99.4550793 76.9882812,99.4550793 L100.110353,99.4550781');
    var doorAngleC = e.mix({ to: .45, value: 1 }, { to: 1, value: bodySkewC });
    var tween = new mojs.Tween({
      delay:    200*this.s,
      duration: 1100*this.s,
      onUpdate: (p)=> {
        
        var riseP = riseC(p);
        var bodySkewP = bodySkewC(p);
        mojs.h.style(this.moleEl, 'transform', `skewX(${12*bodySkewP}deg) scale(${1-.1*riseP}, ${1+.1*riseP}) translate(${-7*bodySkewP}px, ${-17*riseP}px) rotateY(${-10*bodySkewP}deg)`);
        mojs.h.style(this.moleHandEl, 'transform', `rotate(${33 + 60*bodySkewP}deg) scaleY(${1+.07*bodySkewP})`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${20*bodySkewP}deg) translate(${24*bodySkewP}px, ${-10*bodySkewP}px)`);
        

        var doorAngleP = doorAngleC(p);
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125 + 60*e.inverse(doorAngleP)}deg) scaleX(.75) ${this.zHack}`);
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${1-.35*e.inverse(doorAngleP)}) ${this.zHack}`);
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