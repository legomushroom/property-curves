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
    this.anticipationEasing  = mojs.easing.path('M0,0 C0,0 17.1742287,-107.268176 19.3167114,-0.633646433 C24.0739231,112.218223 100,100 100,100');
    this.anticipatingYEasing = mojs.easing.path('M0,100 C4.21746922,99.7372437 14.4689363,99.8708599 19.3294067,99.8708626 C26.7892036,15.1907717 46.8866348,19.6362701 46.8866348,19.6362701 L100,19.6362701');
  },
  createTween: function () {
    this.cubeAnticipationTween = new mojs.Timeline({
      delay:    (this.duration+1000)*this.s,
      duration: this.duration*2.2*this.s,
      onComplete: ()=> { this.cubeMainTween.start(); },
      onUpdate: (p)=> {
        var anticipationProgress = this.anticipationEasing(p),
            anticipationYProgress = 1-this.anticipatingYEasing(p);
        mojs.h.setPrefixedStyle(this.cubeEl, 'transform', `translate3d(0, ${this.translateY-(700*(1-anticipationYProgress))}px, 0)`);

        var nAnticipationProgress = 1+(1-anticipationProgress);
        mojs.h.setPrefixedStyle(this.cubeSquashEl, 'transform', `scaleX(${anticipationProgress}) scaleY(${nAnticipationProgress})`);
        
        this.shadowEl.style.opacity   = anticipationYProgress/2;

        if (anticipationProgress > 1) {
          var scale   = anticipationProgress,
              rotateX = 1-anticipationProgress;
        } else {
          var scale   = nAnticipationProgress,
              rotateX = 0;
        }
        mojs.h.setPrefixedStyle(this.shadowEl, 'transform', `scale(${scale})
                                  translateX(${2*anticipationProgress}px)
                                  translateY(${2*anticipationProgress}px)
                                  rotateX(${-17*rotateX}deg)
                                  rotateY(${17*rotateX}deg)`
        );
      }
    });
    // this.proto.cubeAnticipationTween = this.cubeAnticipationTween;
    this.cubeMainTween.add(this.cubeAnticipationTween);
  }
}

module.exports = cubeFall;
