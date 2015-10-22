var mojs = require('mo-js');
require('./css/styles.styl');

/*
  TODO:
    add tutorial link
    make pen
     - add sounds loader
*/

// SCENES
var cube   = require('./scenes/cube/cube.es6.js');
var mole   = require('./scenes/mole/mole.es6.js');
var {Howl} = require('howler');

var main = {
  s:              1, // global time coefficient
  zHack:          ' translateZ(0) ',
  mainTween:      new mojs.Timeline({ repeat: 999999, delay: 0 }),
  delay:          0,
  cubeDuration:   3900,
  isSound:        true,
  init() {
    this.vars();
    this.showHiddenParts();
    this.loadSounds();
  },

  showHiddenParts () {
    this.sceneEl.style.opacity = 1;
    this.tutorialsLinkEl.style.opacity = 1;
  },

  loadSounds() {
    var soundBase = 'sounds/';
    var soundUrl   = `${soundBase}fall-kick-1.${this.soundFileType}`;
    this.fall1Sound = new Howl({ urls: [ soundUrl ], onload: this.tryToLaunch.bind(this) });
    this.fall2Sound = new Howl({ urls: [ soundUrl ], rate: .9, volume: .8, onload: this.tryToLaunch.bind(this) });
    this.fall3Sound = new Howl({ urls: [ soundUrl ], rate: .8, volume: .5, onload: this.tryToLaunch.bind(this) });
    this.fall4Sound = new Howl({ urls: [ soundUrl ], rate: .7, volume: .4, onload: this.tryToLaunch.bind(this) });
    this.fall5Sound = new Howl({ urls: [ soundUrl ], rate: .6, volume: .3, onload: this.tryToLaunch.bind(this) });

    this.whooshSound1  = new Howl({ urls: [`${soundBase}whoosh-1.${this.soundFileType}`], volume: .4, rate: 1.4, onload: this.tryToLaunch.bind(this) });
    this.doorOpenSound = new Howl({ urls: [`${soundBase}door-open-1.${this.soundFileType}`], rate: 2.5, onload: this.tryToLaunch.bind(this) });
    this.salivaSound1  = new Howl({ urls: [ `${soundBase}saliva-1.${this.soundFileType}` ], onload: this.tryToLaunch.bind(this) });
    this.salivaSound2  = new Howl({ urls: [ `${soundBase}saliva-2.${this.soundFileType}` ], onload: this.tryToLaunch.bind(this) });
    this.sighSound1    = new Howl({ urls: [ `${soundBase}sigh-1.${this.soundFileType}` ], rate: 1.8, onload: this.tryToLaunch.bind(this) });
    
    this.doorOpenSoundSmall = new Howl({ urls: [`${soundBase}door-open-small-1.${this.soundFileType}`], rate: 1.9, volume: .6, onload: this.tryToLaunch.bind(this) });
    this.wehSound1 = new Howl({ urls: [`${soundBase}ugh-2.${this.soundFileType}`], volume: .35, rate: 1.25, onload: this.tryToLaunch.bind(this) });
    this.wehSound2 = new Howl({ urls: [`${soundBase}ugh-1.${this.soundFileType}`], volume: .35, rate: 1.35, onload: this.tryToLaunch.bind(this) });

    this.rantSound1 = new Howl({ urls: [`${soundBase}rant-1-1.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.rantSound2 = new Howl({ urls: [`${soundBase}rant-1-2.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.rantSound3 = new Howl({ urls: [`${soundBase}rant-1-3.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });

    this.doorCloseSound = new Howl({ urls: [`${soundBase}door-close-1.${this.soundFileType}`], rate: 1.5, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.boomSound = new Howl({ urls: [ `${soundBase}fall-kick-1.${this.soundFileType}` ], rate: .5, onload: this.tryToLaunch.bind(this) });
    this.fallingSound = new Howl({ urls: [ `${soundBase}falling-1.${this.soundFileType}` ], rate: 4.5, volume: .05, onload: this.tryToLaunch.bind(this) });
  },

  tryToLaunch() {
    this.soundsLoadedCnt++;
    if (this.soundsLoadedCnt >= 19 && !this.isLaunched ) { this.isLaunched = true; this.onSoundsLoaded(); }
  },

  onSoundsLoaded() {
    this.spinnerEl.style.opacity = 0;
    cube.init(this)
    mole.init(this);
    this.mainTween.start();
  },

  vars() {
    this.sceneEl            = document.querySelector('#js-mole-scene');
    this.moleEl             = document.querySelector('#js-mole');
    this.moleHatEl          = document.querySelector('#js-mole-hat');
    this.moleConeEl         = document.querySelector('#js-mole-hat-cone');
    this.moleConeShadowEl   = document.querySelector('#js-mole-hat-shadow');
    this.moleGlassesEl      = document.querySelector('#js-mole-glasses');
    this.moleGlassesLeftEl  = document.querySelector('#js-mole-glasses-left');
    this.moleMouthEl        = document.querySelector('#js-mole-mouth');
    this.moleMouthInnerEl   = document.querySelector('#js-mole-mouth-inner');
    this.moleMouthOuterEl   = document.querySelector('#js-mole-mouth-outer');
    this.moleHandEl         = document.querySelector('#js-mole-hand');
    this.moleHandLeftEl     = document.querySelector('#js-mole-hand-left');
    this.moleHandCircleEl   = document.querySelector('#js-mole-hand-circle');
    this.doorEl             = document.querySelector('#js-door');
    this.doorShadowEl       = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
    this.moleEyeEl          = document.querySelector('#js-mole-eye');
    this.moleEyeLashEl      = document.querySelector('#js-mole-eye-lash');
    this.moleSceneEl        = document.querySelector('#js-mole-scene');
    this.doorWaveEl         = document.querySelector('#js-door-wave');
    this.tutorialsLinkEl    = document.querySelector('#js-tutorials-link');
    this.spinnerEl          = document.querySelector('#js-spinner');
    this.soundFileType      = (this.isOpera()) ? 'wav' : 'mp3';
    this.soundsLoadedCnt    = 0;
  },
  isOpera: function () {
    var userAgent = navigator.userAgent;
    return /^Opera\//.test(userAgent) || /\x20OPR\//.test(userAgent);
  }
}

main.init();
