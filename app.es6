var mojs = require('mo-js');
require('./css/styles.styl');

var square = document.querySelector('#js-cube'),
    shadow = document.querySelector('#js-shadow'),
    scene  = document.querySelector('#js-cube-scene'),
    bouncyEasing = mojs.easing.path('M1.55708779e-14,100 C5.07689534,92.3484969 10.7347387,63.9733163 16.6678547,0.045125884 C16.6678547,-1.79459817 28.3767503,115.087994 44.1008572,0.045125884 C44.1008572,-0.762447191 52.2136908,56.4504771 63.0182497,0.045125884 C63.0182497,-0.96434046 68.5097621,29.249329 76.4643231,0.045125884 C76.4643231,0.045125884 80.5297451,16.5436594 85.8902733,0.045125884 C85.8902733,-0.762447191 88.2638161,9.66114053 92.132216,0.045125884 C92.132216,-0.156767385 94.1849839,4.47883522 96.918051,0.045125884 C96.918051,-0.156767385 98.7040751,1.93815588 100,0.045125884'),
    scaleEasing  = mojs.easing.path('M0,0 C5.07689534,7.65150309 10.7347387,36.0266837 16.6678547,100 C16.6678547,101.794598 28.3767503,-15.0879941 44.1008572,100 C44.1008572,100.762447 52.2136908,43.5495229 63.0182497,100 C63.0182497,100.96434 68.5097621,70.750671 76.4643231,100 C76.4643231,100 80.5297451,83.4563406 85.8902733,100 C85.8902733,100.762447 88.2638161,90.3388595 92.132216,100 C92.132216,100.156767 94.1849839,95.5211648 96.918051,100 C96.918051,100.156767 98.7040751,98.0618441 100,100');

var timeline = new mojs.Timeline({
  duration: 1200,
  delay: 1000, 
  onUpdate: function (progress) {
    var bounceProgress = bouncyEasing(progress);
    var scaleProgress  = scaleEasing(progress);
    // var bounceProgressCommon = mojs.easing.bounce.out(progress);
    square.style.transform = 'translate3d(0, ' + 500*bounceProgress + 'px, 0)';
    shadow.style.opacity   = bounceProgress;
    shadow.style.transform = `scale(${1+(scaleProgress)})`;
  }
});

var tr = new mojs.Transit({
  parent:       scene,
  x: '50%',     y: 600,
  type:         'rect',
  duration:     300,
  delay:        1100,
  fill:         'transparent',
  stroke:       'white',
  strokeWidth:  {10:0},
  radius:       {100: 200},
  opacity:      .7
  // isRunLess:    true
});

tr.el.setAttribute('class', 'transit');

var tween = new mojs.Tween;
tween.add(timeline);

tween.start();
setInterval(function () {
  tween.start();  tr.run();
}, 5000)
