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

    var delay    = (this.s > 1) ? 0: 0;
    var duration = 1000;
    
    var e = mojs.easing;
    // var handAngleCurve = e.path('M0,0.0557234763 L7.9453125,0.158137605 L7.9453125,-62.2096335 L27.0139179,-62.2096335 L27.0139179,66.661464 L45.9410019,66.661464 L45.9410012,-0.27805839 L45.9410019,-94.524739 L100.009766,-94.524739');
    var bodySkewC = e.path('M0.506500786,100 C0.506500786,100 5.85142524,99.4107621 7.9810887,99.4107621 C7.9810887,66.899765 14.0576168,-39.8300779 32.375588,23.1162121 C34.150559,29.6685115 40.0307601,29.7045647 40.8105474,23.116212 C49.0488287,-46.488282 57.7949224,0 66.8462524,0.141452063 C79.10852,0.14145202 100.481854,0 100.481854,0');
    var riseC = e.path('M0.504882812,100 L8.29748693,100 C19.3574219,34.4345703 32.1187229,99.4550794 32.1187235,100 C32.1187235,100 37.9296875,122.487303 43.1708984,99.4550794 C51.9283709,10.3408208 63.429554,94.8232407 63.4295529,100 C67.7822266,127.167966 76.9882812,99.4550793 76.9882812,99.4550793 L100.110353,100');
    var doorAngleC = e.mix({ to: .45, value: 1 }, { to: 1, value: bodySkewC });
    var tween = new mojs.Tween({
      delay:    delay*this.s,
      duration: duration*this.s,
      onUpdate: (p)=> {
        
        var riseP = riseC(p);
        var bodySkewP = bodySkewC(p);
        mojs.h.style(this.moleEl, 'transform', `skewX(${9*bodySkewP}deg) scale(${1-.15*riseP}, ${1+.15*riseP}) translate(0, ${-17*riseP}px)`);
        mojs.h.style(this.moleHandEl, 'transform', `rotate(${29.5 + 65*bodySkewP}deg) scaleY(${1+.1*bodySkewP}) translateY(${-15*riseP}px)`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${20*bodySkewP}deg) translate(${50*bodySkewP}px, ${-10*bodySkewP - 10*riseP}px)`);

        this.moleEyeLashEl.setAttribute('d', `M0,0 Q ${6.5 - 13*riseP} ${10-30*Math.max(riseP, 0)}, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2 + 2.5*riseP);
        mojs.h.style(this.moleEyeEl, 'transform', `rotate(${60*riseP}deg) translate(${7*riseP}px, ${-4*riseP}px) scaleX(${1-.9*riseP})`);
        
        mojs.h.style(this.moleMouthEl, 'transform', `scale(${.3 + 2.4*riseP})`);
      }
    });

    var tween2 = new mojs.Tween({
      delay:    (delay+150)*this.s,
      duration: duration*this.s,
      onUpdate: (p) => {

        var riseP = riseC(p);
        mojs.h.setPrefixedStyle(this.moleConeEl,        'transform', `rotateX(${210*riseP}deg)` );
        mojs.h.setPrefixedStyle(this.moleGlassesEl,     'transform', `translateY(${-35*riseP}px)` );
        mojs.h.setPrefixedStyle(this.moleGlassesLeftEl, 'transform', `translateY(${-35*riseP}px)` );

      }
    });

    var tween3 = new mojs.Tween({
      delay:    (delay+200)*this.s,
      duration: duration*this.s,
      onUpdate: (p) => {

        var doorAngleP = doorAngleC(p);
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125 + 90*e.inverse(doorAngleP)}deg) scaleX(.75) ${this.zHack}`);
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${1-.45*e.inverse(doorAngleP)}) ${this.zHack}`);


      }
    });

    timeLine.add(tween, tween2, tween3);
    this.moleRantingTween.append(timeLine);
  },
  initChildScenes: function () {
    // tongue.init(this);
  }
}


module.exports = moleRantingSearch;