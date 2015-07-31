var mojs     = require('mo-js');

// SCENES
var moleRantingHand = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    // this.s = 10;
    // this.delay = (this.s < 5) ? 1400 : 0;
  },
  createTween: function () {
    var handAngleCurve = mojs.easing.path('M0,100 L3.13085938,99.9660558 C11.128418,-42.5141612 24.7357688,10.3389432 24.7357688,10.3389432 C24.7357688,10.3389432 35.4207115,6.43611673 35.420711,19.551763 C35.420711,19.551763 35.4207115,28.5204487 38.4679491,20.1010452 C45.9122391,-2.41706848 48.2480469,19.3280379 49.4205542,19.3280385 C49.4205546,6.88000841 55.0592461,-3.51334643 59,15.8785806 C60.6251608,22.5931723 56.8918457,-3.3408203 65.4951172,-3.3408203 C68.7340668,-3.54252346 69.730594,6.60260412 70.328125,14.0234368 C70.9301836,21.5004985 74.0961573,27.0302603 74.7888322,18.8316301 C77.5927734,-0.603027419 100,0 100,0');
    var handStretchCurve = mojs.easing.path('M1.13686838e-13,100.140658 C1.13686838e-13,100.140658 5.01160836,100.097038 8.74856937,100.270866 C15.1440434,57.219434 23.7860103,98.447299 23.7860103,100.097037 C30.2913574,71.1380541 36.1603623,98.3939125 36.160361,100.162142 C41.9325738,44.182975 49.1344299,98.9199542 49.1344299,100.053418 C53.6287224,80.2298508 59.2720971,99.9303714 59.2720971,99.9303714 C59.2720971,99.9303714 63.6972656,56.5605469 70.2742418,100.003578 C72.7851563,131.47461 74.5979385,101.614397 75,100.097038 C78.8691406,68.734375 82.3889542,100.577847 94.1109085,100.097038 L99.9962311,100.097038');
    var tween = new mojs.Tween({
      delay:    1600*this.s,
      duration: this.handRantingDuration*this.s,
      onUpdate: (p)=> {
        var handP        = handAngleCurve(p);
        var handStretchP = handStretchCurve(p);
        var inv          = mojs.easing.inverse(handStretchP);
        var shiftP       = mojs.easing.quad.out(p);
        var handStretchShiftP = handStretchCurve(shiftP);

        mojs.h.style(this.moleHandEl, 'transform', `rotate(${this.handAngle*handP}deg) scaleX(${1-(.4*handStretchP)}) scaleY(${1+handStretchP}) ${this.zHack}`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `translateY(${-75*handStretchP}px) ${this.zHack}`);

        mojs.h.style(this.moleGlassesEl,     'transform', `translateY(${-45*handStretchShiftP}px) ${this.zHack}`);
        mojs.h.style(this.moleGlassesLeftEl, 'transform', `translateY(${-45*handStretchShiftP}px) ${this.zHack}`);

        var bodyScale = .25*handStretchP;
        mojs.h.style(this.moleEl, 'transform', `scaleY(${1+bodyScale}) scaleX(${1-bodyScale}) ${this.zHack}`);
        mojs.h.style(this.moleMouthEl, 'transform', `scale(${1-(5*handStretchP)}) translateX(${-50*handStretchShiftP}px) ${this.zHack}`);
        mojs.h.style(this.moleMouthInnerEl, 'transform', `scale(${1-(4*handStretchP)}) translateX(${Math.min(-150*handStretchP, 10)}px) translateY(${(-20*handStretchShiftP)}px) ${this.zHack}`);
        mojs.h.style(this.moleMouthOuterEl, 'border-top-right-radius', `${200*(handStretchShiftP)}%`);
      }
    });
    this.mainTween.add(tween);
  },
  initChildScenes: function () {
    // tongue.init(this);
  }
}


module.exports = moleRantingHand;