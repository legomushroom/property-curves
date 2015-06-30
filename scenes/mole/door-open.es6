var mojs     = require('mo-js');

var door = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.doorEl       = document.querySelector('#js-door');
    this.doorShadowEl = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
    // this.cubeEl       = document.querySelector('#js-cube');
    // this.cubeSquashEl = document.querySelector('#js-cube-squash');
    // this.shadowEl     = document.querySelector('#js-shadow');
    // this.sceneEl      = document.querySelector('#js-cube-scene');
    // this.translateY   = 500;
    // this.duration     = 2000;
    // this.delay        = 0;
  },
  createTween: function () {
    var tween = new mojs.Tween({
      duration: 1500*this.s,
      delay: 1400*this.s,
      onUpdate: (p) => {
        // return;
        var bounce = mojs.easing.bounce.out(p);
        var pp = mojs.easing.cubic.out(mojs.easing.cubic.out(p));
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125*bounce}deg) translateX(${8*(1-pp)}px) translateY(${8*(1-pp)}px) scaleX(${1-(.25*bounce)})`);
        
        var shadowBounce = mojs.easing.cubic.in(bounce)
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${shadowBounce})`);
        this.doorShadowEl.style.opacity = shadowBounce;
        
        mojs.h.setPrefixedStyle(this.doorHandleShadowEl, 'transform', `rotateZ(${-75*(1-bounce)}deg) scaleY(${bounce})`);
        this.doorHandleShadowEl.style.opacity = bounce;

      }
    });
    tween.start()

  }
}


module.exports = door;