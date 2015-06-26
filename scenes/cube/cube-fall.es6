mojs = require('mo-js');
var effects = require('./cube-fall-effects');

var cubeFall = {
  init: function (proto) {
    // set prototype to cube object
    this.proto = proto;
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    effects.init(this);
  },
  vars: function () {
    this.bouncyEasing = mojs.easing.path('M0,100 C4.00577744,92.3519448 8.46993511,63.9895504 13.1512887,0.0901667719 L21.3497674,0 C21.3497674,-1.77229627 30.5883328,115.057627 42.9949846,0 L48.1345723,0 C48.1345723,-0.774700647 54.5357691,56.4124428 63.0607938,0 L66.17434,0 C66.17434,-0.960124778 70.5072591,29.23993 76.7835754,0 L78.6555388,0 C78.6555388,0.000360393587 81.8632425,16.4914595 86.0928122,0 L87.2894428,0 C87.2894428,-0.761743229 89.1622181,9.6571475 92.2144672,0 L93.1382971,0 C93.1382971,-0.227841855 94.7579743,4.40567189 96.9144218,0 L97.5682773,0 C97.5682773,-0.227841855 98.9774879,1.86613741 100,0');
    this.scaleEasing  = mojs.easing.path('M0,0 C4.00577744,7.64805524 8.46993511,36.0104496 13.1512887,99.9098332 L21.3497674,100 C21.3497674,101.772296 30.5883328,-15.0576272 42.9949846,100 L48.1345723,100 C48.1345723,100.774701 54.5357691,43.5875572 63.0607938,100 L66.17434,100 C66.17434,100.960125 70.5072591,70.76007 76.7835754,100 L78.6555388,100 C78.6555388,99.9996396 81.8632425,83.5085405 86.0928122,100 L87.2894428,100 C87.2894428,100.761743 89.1622181,90.3428525 92.2144672,100 L93.1382971,100 C93.1382971,100.227842 94.7579743,95.5943281 96.9144218,100 L97.5682773,100 C97.5682773,100.227842 98.9774879,98.1338626 100,100');
    this.squashEasing = mojs.easing.path('M0,100 C0,100 4.50292969,98.5458979 13.1655083,129.599609 C13.1655083,125.550292 14.5922587,111.423982 14.9775391,100 C18.3436489,0.118817967 21.3763133,100 21.3763133,100 C21.3763133,100 24.1020114,143.589313 31.182035,100.498105 C31.328125,99.3914616 32.96875,99.9925683 32.96875,99.9925683 C32.96875,99.9925683 37.7038574,101.822997 43.1033936,119.37915 C43.4711914,114.650634 44.145598,101.943658 44.3303223,99.9925683 C46.303074,64.0298992 48.1256605,100 48.1256605,100 C48.1199951,99.9868613 49.9071233,128.571455 54.5492038,100.31832 C54.644989,99.5927399 55.7206794,99.9868608 55.7206794,99.9868608 C55.7206794,99.9868608 59.6297405,101.239014 63.1699944,112.749862 C63.4111443,109.649569 64.0730787,101.271818 64.1941948,99.9925683 C65.7125677,79.1142212 66.3750221,100 66.3750221,100 C66.3750221,100 75.6449112,100 76.9499613,100 C77.9891495,90.3360533 78.7952818,100 78.7952818,100 C78.7952818,100 85.3866104,100 86.163329,100 C86.7355255,95.6422743 87.4229688,100 87.4229688,100 C87.4229688,100 91.4811997,100 92.0937284,100 C92.6703705,97.8777651 93.2507552,100 93.2507552,100 C93.2507552,100 96.5008682,100 97.0045401,100 C97.4574799,98.8978552 97.8392386,100 97.8392386,100 L100,100');
    // bouncy easing without pauses
    // this.bouncyEasing = mojs.easing.path('M1.55708779e-14,100 C5.07689534,92.3484969 10.7347387,63.9733163 16.6678547,0.045125884 C16.6678547,-1.79459817 28.3767503,115.087994 44.1008572,0.045125884 C44.1008572,-0.762447191 52.2136908,56.4504771 63.0182497,0.045125884 C63.0182497,-0.96434046 68.5097621,29.249329 76.4643231,0.045125884 C76.4643231,0.045125884 80.5297451,16.5436594 85.8902733,0.045125884 C85.8902733,-0.762447191 88.2638161,9.66114053 92.132216,0.045125884 C92.132216,-0.156767385 94.1849839,4.47883522 96.918051,0.045125884 C96.918051,-0.156767385 98.7040751,1.93815588 100,0.045125884');
    // this.scaleEasing  = mojs.easing.path('M0,0 C5.07689534,7.65150309 10.7347387,36.0266837 16.6678547,100 C16.6678547,101.794598 28.3767503,-15.0879941 44.1008572,100 C44.1008572,100.762447 52.2136908,43.5495229 63.0182497,100 C63.0182497,100.96434 68.5097621,70.750671 76.4643231,100 C76.4643231,100 80.5297451,83.4563406 85.8902733,100 C85.8902733,100.762447 88.2638161,90.3388595 92.132216,100 C92.132216,100.156767 94.1849839,95.5211648 96.918051,100 C96.918051,100.156767 98.7040751,98.0618441 100,100');
    // this.squashEasing = mojs.easing.path('M0,-2.84217094e-14 C5.07689534,3.82575155 16.6678547,49.9774371 16.6678547,49.9774371 C16.6678547,49.9774371 16.6678543,-189.108256 22.1277174,49.9774371 C25.358017,49.9774371 100,49.9774371 100,49.9774371');
  },
  createTween: function () {
    var tween = new mojs.Tween;
    this.cubeFallTween = new mojs.Timeline({
      duration: this.duration*this.s,
      delay:    this.delay*this.s,
      // onComplete: () => {
      //   this.cubeAnticipationTween.start();
      // },
      onUpdate: (progress) => {
        var bounceProgress = this.bouncyEasing(progress),
            scaleProgress  = this.scaleEasing(progress),
            squashProgress = this.squashEasing(progress);
        
        mojs.h.setPrefixedStyle(this.cubeEl, 'transform', `translate3d(0, ${this.translateY*bounceProgress}px, 0)`);
        mojs.h.setPrefixedStyle(this.cubeSquashEl, 'transform', `scaleX(${1+squashProgress}) scaleY(${1-squashProgress})`);
        mojs.h.setPrefixedStyle(this.shadowEl, 'transform', `scale(${1+(scaleProgress)+squashProgress}) rotateY(${-14*squashProgress}deg) rotateX(${14*squashProgress}deg)`);
        this.shadowEl.style.opacity  = Math.max((bounceProgress)/2, .1 );
      }
    });
    tween.add(this.cubeFallTween);
    this.cubeMainTween.add(tween);
    // this.proto.cubeFallTween = tween;
  }
}

module.exports = cubeFall;
