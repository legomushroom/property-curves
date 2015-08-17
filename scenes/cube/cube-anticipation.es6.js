mojs = require('mo-js');

var cubeFall = {
  init: function (proto) {
    this.proto = proto;
    // set prototype to cube object
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars: function () {
    this.anticipationEasing  = mojs.easing.path('M-0.033203125,100 C-0.033203125,100 6.21750498,-50.9832668 14.7695313,100 C14.8270918,101.016213 13.2785395,120.164045 26.953125,128.024416 C33.6923828,132.121096 65.6133582,130.778973 77.6015625,126.065432 C98.8678283,117.703926 99.956543,100 99.956543,100');
    this.anticipatingYEasing = mojs.easing.path('M0,100 C4.21746922,99.7372437 14.4689363,99.8708599 19.3294067,99.8708626 C26.5066376,7.56216386 46.8866348,19.6362701 46.8866348,19.6362701 L100,19.6362701');
    this.s = 1;
  },
  createTween: function () {
    this.cubeAnticipationTween = new mojs.Tween({
      delay:    (this.fallDuration + 200)*this.s,
      duration: (1*this.fallDuration)*this.s,
      // onComplete: ()=> { mojs.h.style(this.cubeEl, 'transform', ''); },
      onUpdate: (p)=> {
        var anticipationProgress = this.anticipationEasing(p),
            anticipationYProgress = 1-this.anticipatingYEasing(p);
        mojs.h.style(this.cubeEl, 'transform', `translate3d(0, ${this.translateY-(700*(1-anticipationYProgress))}px, 0)`);

        var nAnticipationProgress = 1+(1-anticipationProgress);
        mojs.h.style(this.cubeSquashEl, 'transform', `scaleX(${anticipationProgress}) scaleY(${nAnticipationProgress})`);
        
        if (anticipationProgress > 1) {
          var scale   = anticipationProgress, rotateX = 1-anticipationProgress;
        } else {
          var scale   = nAnticipationProgress, rotateX = .2*mojs.easing.cubic.out(p);
        }
        mojs.h.style(this.shadowEl, 'transform', `scale(${scale})
                                  translateX(${2*anticipationProgress}px)
                                  translateY(${2*anticipationProgress}px)
                                  rotateX(${-17*rotateX}deg)
                                  rotateY(${17*rotateX}deg)`
        );
        
        this.shadowEl.style.opacity = (anticipationYProgress/2) - .3*(1-anticipationProgress);
      }
    });
    this.cubeMainTween.add(this.cubeAnticipationTween);
  }
}

module.exports = cubeFall;
