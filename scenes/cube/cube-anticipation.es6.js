mojs = require('mo-js');

var cubeAnticipation = {
  init: function (proto) {
    this.proto = proto;
    // set prototype to cube object
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars: function () {
    this.anticipationEasing  = mojs.easing.path('M0,0 C0,0 17.1742287,-107.268176 19.3167114,-0.633646433 C19.3167114,55.7683836 100,100 100,100');
    this.anticipatingYEasing = mojs.easing.path('M0,100 C4.21746922,99.7372437 14.4689363,99.8708599 19.3294067,99.8708626 C26.5066376,7.56216386 46.8866348,19.6362701 46.8866348,19.6362701 L100,19.6362701');
  },
  createTween: function () {
    this.cubeAnticipationTween = new mojs.Tween({
      delay:    (this.fallDuration + 200)*this.s,
      duration: (1*this.fallDuration)*this.s,
      // onComplete: ()=> { mojs.h.style(this.cubeEl, 'transform', ''); },
      onUpdate: (p)=> {
        var anticipationProgress = this.anticipationEasing(p),
            anticipationYProgress = 1-this.anticipatingYEasing(p);
        mojs.h.style(this.cubeEl, 'transform', `translate3d(0, ${-this.translateY*(1-anticipationYProgress)}px, 0)`);

        var nAnticipationProgress = 1+(1-anticipationProgress);
        mojs.h.style(this.cubeSquashEl, 'transform', `scaleX(${anticipationProgress}) scaleY(${nAnticipationProgress})`);
        
        if (anticipationProgress > 1) {
          var scale   = anticipationProgress, rotateX = 1-anticipationProgress;
        } else {
          var scale   = nAnticipationProgress, rotateX = .2*mojs.easing.cubic.out(p);
        }
        mojs.h.style(this.shadowEl, 'transform', `scale(${scale})
                                  translateX(${-.5*anticipationProgress}px)
                                  translateY(${-.5*anticipationProgress}px)
                                  rotateX(${30*rotateX}deg)
                                  rotateY(${-30*rotateX}deg)`
        );
        
        this.shadowEl.style.opacity = (anticipationYProgress/2) - .3*(1-anticipationProgress);
      }
    });
    this.cubeMainTween.add(this.cubeAnticipationTween);
  }
}

module.exports = cubeAnticipation;
