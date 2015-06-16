var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

const S = 1;

var cube         = document.querySelector('#js-cube'),
    cubeSquash   = document.querySelector('#js-cube-squash'),
    shadow       = document.querySelector('#js-shadow'),
    scene        = document.querySelector('#js-cube-scene'),
    bouncyEasing = mojs.easing.path('M0,100 C4.00577744,92.3519448 8.46993511,63.9895504 13.1512887,0.0901667719 L21.3497674,0.0450612221 C21.3497674,-1.77229627 30.5883328,115.057627 42.9949846,0.0450612221 L48.1345723,0.0450612221 C48.1345723,-0.774700647 54.5357691,56.4124428 63.0607938,0.0450612221 L66.17434,0.0450612221 C66.17434,-0.960124778 70.5072591,29.23993 76.7835754,0.0450612221 L78.6555388,0.0450612221 C78.6555388,0.000360393587 81.8632425,16.4914595 86.0928122,0.0450612221 L87.2894428,0.0450612221 C87.2894428,-0.761743229 89.1622181,9.6571475 92.2144672,0.0450612221 L93.1382971,0.0450612221 C93.1382971,-0.227841855 94.7579743,4.40567189 96.9144218,0.0450612221 L97.5682773,0.0450612221 C97.5682773,-0.227841855 98.9774879,1.86613741 100,0.0450612221'),    
    scaleEasing  = mojs.easing.path('M0,0 C4.00577744,7.64805524 8.46993511,36.0104496 13.1512887,99.9098332 L21.3497674,99.9549388 C21.3497674,101.772296 30.5883328,-15.0576272 42.9949846,99.9549388 L48.1345723,99.9549388 C48.1345723,100.774701 54.5357691,43.5875572 63.0607938,99.9549388 L66.17434,99.9549388 C66.17434,100.960125 70.5072591,70.76007 76.7835754,99.9549388 L78.6555388,99.9549388 C78.6555388,99.9996396 81.8632425,83.5085405 86.0928122,99.9549388 L87.2894428,99.9549388 C87.2894428,100.761743 89.1622181,90.3428525 92.2144672,99.9549388 L93.1382971,99.9549388 C93.1382971,100.227842 94.7579743,95.5943281 96.9144218,99.9549388 L97.5682773,99.9549388 C97.5682773,100.227842 98.9774879,98.1338626 100,99.9549388'),
    squashEasing = mojs.easing.path('M0.208007816,99.9925684 C0.208007816,99.9925684 4.50292969,98.5458979 13.1655083,129.599609 C13.1655083,125.550292 14.5922587,111.423982 14.9775391,99.9925684 C18.3436489,0.118817967 21.3763133,99.9925691 21.3763133,99.9925691 C21.3763133,99.9925691 24.1020114,143.589313 31.182035,100.498105 C31.328125,99.3914616 32.96875,99.9925683 32.96875,99.9925683 C32.96875,99.9925683 37.7038574,101.822997 43.1033936,119.37915 C43.4711914,114.650634 44.145598,101.943658 44.3303223,99.9925683 C46.303074,64.0298992 48.1256605,99.9925691 48.1256605,99.9925691 C48.1199951,99.9868613 49.9071233,128.571455 54.5492038,100.31832 C54.644989,99.5927399 55.7206794,99.9868608 55.7206794,99.9868608 C55.7206794,99.9868608 59.6297405,101.239014 63.1699944,112.749862 C63.4111443,109.649569 64.0730787,101.271818 64.1941948,99.9925683 C65.7125677,79.1142212 66.3750221,99.9925691 66.3750221,99.9925691 C66.3750221,99.9925691 75.6449112,99.9925684 76.9499613,99.9925691 C77.9891495,90.3360533 78.7952818,99.9925691 78.7952818,99.9925691 C78.7952818,99.9925691 85.3866104,99.9925684 86.163329,99.9925691 C86.7355255,95.6422743 87.4229688,99.9925691 87.4229688,99.9925691 C87.4229688,99.9925691 91.4811997,99.9925684 92.0937284,99.9925691 C92.6703705,97.8777651 93.2507552,99.9925691 93.2507552,99.9925691 C93.2507552,99.9925691 96.5008682,99.9925684 97.0045401,99.9925691 C97.4574799,98.8978552 97.8392386,99.9925691 97.8392386,99.9925691 L100,99.9925691')
    // bouncy easing without pauses
    // bouncyEasing = mojs.easing.path('M1.55708779e-14,100 C5.07689534,92.3484969 10.7347387,63.9733163 16.6678547,0.045125884 C16.6678547,-1.79459817 28.3767503,115.087994 44.1008572,0.045125884 C44.1008572,-0.762447191 52.2136908,56.4504771 63.0182497,0.045125884 C63.0182497,-0.96434046 68.5097621,29.249329 76.4643231,0.045125884 C76.4643231,0.045125884 80.5297451,16.5436594 85.8902733,0.045125884 C85.8902733,-0.762447191 88.2638161,9.66114053 92.132216,0.045125884 C92.132216,-0.156767385 94.1849839,4.47883522 96.918051,0.045125884 C96.918051,-0.156767385 98.7040751,1.93815588 100,0.045125884'),
    // scaleEasing  = mojs.easing.path('M0,0 C5.07689534,7.65150309 10.7347387,36.0266837 16.6678547,100 C16.6678547,101.794598 28.3767503,-15.0879941 44.1008572,100 C44.1008572,100.762447 52.2136908,43.5495229 63.0182497,100 C63.0182497,100.96434 68.5097621,70.750671 76.4643231,100 C76.4643231,100 80.5297451,83.4563406 85.8902733,100 C85.8902733,100.762447 88.2638161,90.3388595 92.132216,100 C92.132216,100.156767 94.1849839,95.5211648 96.918051,100 C96.918051,100.156767 98.7040751,98.0618441 100,100');
    // squashEasing = mojs.easing.path('M0,-2.84217094e-14 C5.07689534,3.82575155 16.6678547,49.9774371 16.6678547,49.9774371 C16.6678547,49.9774371 16.6678543,-189.108256 22.1277174,49.9774371 C25.358017,49.9774371 100,49.9774371 100,49.9774371');

var fall1Sound = new Howl({ urls: ['./sounds/fall-kick-1.wav'] });
var fall2Sound = new Howl({ urls: ['./sounds/fall-kick-1.wav'], rate: .9, volume: .8 });
var fall3Sound = new Howl({ urls: ['./sounds/fall-kick-1.wav'], rate: .8, volume: .5 });
var fall4Sound = new Howl({ urls: ['./sounds/fall-kick-1.wav'], rate: .7, volume: .4 });
var fall5Sound = new Howl({ urls: ['./sounds/fall-kick-1.wav'], rate: .6, volume: .3 });

var duration = 2
var timeline = new mojs.Timeline({
  duration: duration*1000*S,
  // delay: 1000, 
  onUpdate: function (progress) {
    var bounceProgress = bouncyEasing(progress),
        scaleProgress  = scaleEasing(progress),
        squashProgress = squashEasing(progress);
        // squashProgress = squashEasing(progress);
    // var bounceProgressCommon = mojs.easing.bounce.out(progress);
    cube.style.transform = `translate3d(0, ${500*bounceProgress}px, 0)`;
    cubeSquash.style.transform = `scaleX(${1+squashProgress})
                                  scaleY(${1-squashProgress})`;
    shadow.style.opacity   = (bounceProgress)/2;
    shadow.style.transform = `scale(${1+(scaleProgress)+squashProgress})
                              rotateY(${-14*squashProgress}deg)
                              rotateX(${14*squashProgress}deg)`;
  }
});

var burstOption = {
  parent:      scene,
  x: '100%',   y: 600,
  shiftX:     {0: 300},
  shiftY:     {0: '-50'},
  type:       ['circle', 'rect', 'polygon'],
  fill:       ['white', 'yellow', 'pink'],
  delay:      265*S,
  duration:   1400*S,
  radius:      {50: 150},
  degree:      200,
  count:       5,
  angle:       {0:'-25'},
  easing:     'expo.out',
  isSwirl:     true,
  randomRadius:     .7,
  randomAngle:      .1,
  swirlFrequency:   5,
  isRunLess:        true,
  opacity:          .5
};

var burst = new mojs.Burst(burstOption);
var burst2Option = {
  x: '-20%',    shiftX: {0: -300},
  angle:       {0:'25'},
  onStart: function () {
    fall1Sound.play();
  }
}

mojs.h.extend(burst2Option, burstOption);
var burst2 = new mojs.Burst(burst2Option);
var largeBurstTween = new mojs.Tween;
largeBurstTween.add(burst.tween, burst2.tween);


var burst3Option = {delay: 850*S, radius: {30: 60}, count: 3}
var burst4Option = {
    x: '-20%', shiftX: {0: -300}, angle: {0:'25'},
    onStart: function () {
      fall2Sound.play();
    }
  }
mojs.h.extend(burst3Option, burstOption);
mojs.h.extend(burst4Option, burst3Option);
var burst3 = new mojs.Burst(burst3Option);
var burst4 = new mojs.Burst(burst4Option);
var large2BurstTween = new mojs.Tween;
large2BurstTween.add(burst3.tween, burst4.tween);


var burst5Option = {delay: 1275*S, radius: {15: 30}, count: 2, shiftX: {0: 150}, shiftY: {0: '-25'}}
var burst6Option = {
  x: '-20%', shiftX: {0: -150}, angle: {0:'25'},
  onStart: function () {
    fall3Sound.play();
  }
}
mojs.h.extend(burst5Option, burstOption);
mojs.h.extend(burst6Option, burst5Option);
var burst5 = new mojs.Burst(burst5Option);
var burst6 = new mojs.Burst(burst6Option);
var large3BurstTween = new mojs.Tween;
large3BurstTween.add(burst5.tween, burst6.tween);


var burst7Option = {delay: 1550*S, radius: {5: 12}, count: 1, shiftX: {0: 80}, shiftY: {0: '-15'}}
var burst8Option = {
  x: '-20%', shiftX: {0: -80}, angle: {0:'15'},
  onStart: function () {
    fall4Sound.play();
  }
}
mojs.h.extend(burst7Option, burstOption);
mojs.h.extend(burst8Option, burst7Option);
var burst7 = new mojs.Burst(burst7Option);
var burst8 = new mojs.Burst(burst8Option);
var large4BurstTween = new mojs.Tween;
large4BurstTween.add(burst7.tween, burst8.tween);

var burst9Option = {delay: 1725*S, radius: {5: 12}, count: 1, shiftX: {0: 60}, shiftY: {0: '-10'}, childOptions: {radius: {3:0}} }
var burst10Option = {
  x: '-20%', shiftX: {0: -60}, angle: {0:'10'},
  onStart: function () {
    fall5Sound.play();
  }
}
mojs.h.extend(burst9Option, burstOption);
mojs.h.extend(burst10Option, burst9Option);
var burst9 = new mojs.Burst(burst9Option);
var burst10 = new mojs.Burst(burst10Option);
var large5BurstTween = new mojs.Tween;
large5BurstTween.add(burst9.tween, burst10.tween);

var tween = new mojs.Tween;
tween.add(
  timeline,
  largeBurstTween, large2BurstTween,
  large3BurstTween, large4BurstTween,
  large5BurstTween
);

tween.start();
setInterval(function () {
  tween.start();
}, ((duration*1000)+2000)*S)
