/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) {
	  return obj && (obj["default"] || obj);
	};

	var _core = _interopRequire(__webpack_require__(2));

	var mojs = __webpack_require__(3);
	var Howl = __webpack_require__(4).Howl;
	__webpack_require__(5);

	var S = 1;

	var cube = document.querySelector("#js-cube"),
	    cubeSquash = document.querySelector("#js-cube-squash"),
	    shadow = document.querySelector("#js-shadow"),
	    scene = document.querySelector("#js-cube-scene"),
	    bouncyEasing = mojs.easing.path("M0,100 C4.00577744,92.3519448 8.46993511,63.9895504 13.1512887,0.0901667719 L21.3497674,0 C21.3497674,-1.77229627 30.5883328,115.057627 42.9949846,0 L48.1345723,0 C48.1345723,-0.774700647 54.5357691,56.4124428 63.0607938,0 L66.17434,0 C66.17434,-0.960124778 70.5072591,29.23993 76.7835754,0 L78.6555388,0 C78.6555388,0.000360393587 81.8632425,16.4914595 86.0928122,0 L87.2894428,0 C87.2894428,-0.761743229 89.1622181,9.6571475 92.2144672,0 L93.1382971,0 C93.1382971,-0.227841855 94.7579743,4.40567189 96.9144218,0 L97.5682773,0 C97.5682773,-0.227841855 98.9774879,1.86613741 100,0", { precompute: 5000 }),
	    scaleEasing = mojs.easing.path("M0,0 C4.00577744,7.64805524 8.46993511,36.0104496 13.1512887,99.9098332 L21.3497674,100 C21.3497674,101.772296 30.5883328,-15.0576272 42.9949846,100 L48.1345723,100 C48.1345723,100.774701 54.5357691,43.5875572 63.0607938,100 L66.17434,100 C66.17434,100.960125 70.5072591,70.76007 76.7835754,100 L78.6555388,100 C78.6555388,99.9996396 81.8632425,83.5085405 86.0928122,100 L87.2894428,100 C87.2894428,100.761743 89.1622181,90.3428525 92.2144672,100 L93.1382971,100 C93.1382971,100.227842 94.7579743,95.5943281 96.9144218,100 L97.5682773,100 C97.5682773,100.227842 98.9774879,98.1338626 100,100"),
	    squashEasing = mojs.easing.path("M0,100 C0,100 4.50292969,98.5458979 13.1655083,129.599609 C13.1655083,125.550292 14.5922587,111.423982 14.9775391,100 C18.3436489,0.118817967 21.3763133,100 21.3763133,100 C21.3763133,100 24.1020114,143.589313 31.182035,100.498105 C31.328125,99.3914616 32.96875,99.9925683 32.96875,99.9925683 C32.96875,99.9925683 37.7038574,101.822997 43.1033936,119.37915 C43.4711914,114.650634 44.145598,101.943658 44.3303223,99.9925683 C46.303074,64.0298992 48.1256605,100 48.1256605,100 C48.1199951,99.9868613 49.9071233,128.571455 54.5492038,100.31832 C54.644989,99.5927399 55.7206794,99.9868608 55.7206794,99.9868608 C55.7206794,99.9868608 59.6297405,101.239014 63.1699944,112.749862 C63.4111443,109.649569 64.0730787,101.271818 64.1941948,99.9925683 C65.7125677,79.1142212 66.3750221,100 66.3750221,100 C66.3750221,100 75.6449112,100 76.9499613,100 C77.9891495,90.3360533 78.7952818,100 78.7952818,100 C78.7952818,100 85.3866104,100 86.163329,100 C86.7355255,95.6422743 87.4229688,100 87.4229688,100 C87.4229688,100 91.4811997,100 92.0937284,100 C92.6703705,97.8777651 93.2507552,100 93.2507552,100 C93.2507552,100 96.5008682,100 97.0045401,100 C97.4574799,98.8978552 97.8392386,100 97.8392386,100 L100,100");
	// bouncy easing without pauses
	// bouncyEasing = mojs.easing.path('M1.55708779e-14,100 C5.07689534,92.3484969 10.7347387,63.9733163 16.6678547,0.045125884 C16.6678547,-1.79459817 28.3767503,115.087994 44.1008572,0.045125884 C44.1008572,-0.762447191 52.2136908,56.4504771 63.0182497,0.045125884 C63.0182497,-0.96434046 68.5097621,29.249329 76.4643231,0.045125884 C76.4643231,0.045125884 80.5297451,16.5436594 85.8902733,0.045125884 C85.8902733,-0.762447191 88.2638161,9.66114053 92.132216,0.045125884 C92.132216,-0.156767385 94.1849839,4.47883522 96.918051,0.045125884 C96.918051,-0.156767385 98.7040751,1.93815588 100,0.045125884'),
	// scaleEasing  = mojs.easing.path('M0,0 C5.07689534,7.65150309 10.7347387,36.0266837 16.6678547,100 C16.6678547,101.794598 28.3767503,-15.0879941 44.1008572,100 C44.1008572,100.762447 52.2136908,43.5495229 63.0182497,100 C63.0182497,100.96434 68.5097621,70.750671 76.4643231,100 C76.4643231,100 80.5297451,83.4563406 85.8902733,100 C85.8902733,100.762447 88.2638161,90.3388595 92.132216,100 C92.132216,100.156767 94.1849839,95.5211648 96.918051,100 C96.918051,100.156767 98.7040751,98.0618441 100,100');
	// squashEasing = mojs.easing.path('M0,-2.84217094e-14 C5.07689534,3.82575155 16.6678547,49.9774371 16.6678547,49.9774371 C16.6678547,49.9774371 16.6678543,-189.108256 22.1277174,49.9774371 C25.358017,49.9774371 100,49.9774371 100,49.9774371');

	var fall1Sound = new Howl({ urls: ["./sounds/fall-kick-1.wav"] });
	var fall2Sound = new Howl({ urls: ["./sounds/fall-kick-1.wav"], rate: 0.9, volume: 0.8 });
	var fall3Sound = new Howl({ urls: ["./sounds/fall-kick-1.wav"], rate: 0.8, volume: 0.5 });
	var fall4Sound = new Howl({ urls: ["./sounds/fall-kick-1.wav"], rate: 0.7, volume: 0.4 });
	var fall5Sound = new Howl({ urls: ["./sounds/fall-kick-1.wav"], rate: 0.6, volume: 0.3 });

	var delay = 0;
	var duration = 2,
	    translateY = 500;
	var timeline = new mojs.Timeline({
	  duration: duration * 1000 * S,
	  delay: delay * S,
	  onUpdate: function (progress) {
	    var bounceProgress = bouncyEasing(progress),
	        scaleProgress = scaleEasing(progress),
	        squashProgress = squashEasing(progress);
	    // var bounceProgress = mojs.easing.bounce.out(progress),
	    //     scaleProgress  = mojs.easing.cubic.out(progress),
	    //     squashProgress = mojs.easing.elastic.out(progress);
	    // squashProgress = squashEasing(progress);
	    // var bounceProgressCommon = mojs.easing.bounce.out(progress);
	    cube.style["-webkit-transform"] = "translate3d(0, " + translateY * bounceProgress + "px, 0)";
	    cubeSquash.style["-webkit-transform"] = "scaleX(" + (1 + squashProgress) + ")\n                                  scaleY(" + (1 - squashProgress) + ")";
	    shadow.style.opacity = bounceProgress / 2;
	    shadow.style["-webkit-transform"] = "scale(" + (1 + scaleProgress + squashProgress) + ")\n                              rotateY(" + -14 * squashProgress + "deg)\n                              rotateX(" + 14 * squashProgress + "deg)";
	  }
	});

	var burstOption = {
	  parent: scene,
	  x: "100%", y: 600,
	  shiftX: { 0: 300 },
	  shiftY: { 0: "-50" },
	  type: ["circle", "rect", "polygon"],
	  fill: ["white", "yellow", "pink"],
	  delay: (delay + 265) * S,
	  duration: 1400 * S,
	  radius: { 50: 150 },
	  degree: 200,
	  count: 5,
	  angle: { 0: "-25" },
	  easing: "expo.out",
	  isSwirl: true,
	  randomRadius: 0.7,
	  randomAngle: 0.1,
	  swirlFrequency: 5,
	  isRunLess: true,
	  opacity: 0.5
	};

	var burst = new mojs.Burst(burstOption);
	var burst2Option = {
	  x: "-20%", shiftX: { 0: -300 },
	  angle: { 0: "25" },
	  onStart: function () {
	    fall1Sound.play();
	  }
	};

	mojs.h.extend(burst2Option, burstOption);
	var burst2 = new mojs.Burst(burst2Option);
	var largeBurstTween = new mojs.Tween();
	largeBurstTween.add(burst.tween, burst2.tween);


	var burst3Option = { delay: (delay + 850) * S, radius: { 30: 60 }, count: 3 };
	var burst4Option = {
	  x: "-20%", shiftX: { 0: -300 }, angle: { 0: "25" },
	  onStart: function () {
	    fall2Sound.play();
	  }
	};
	mojs.h.extend(burst3Option, burstOption);
	mojs.h.extend(burst4Option, burst3Option);
	var burst3 = new mojs.Burst(burst3Option);
	var burst4 = new mojs.Burst(burst4Option);
	var large2BurstTween = new mojs.Tween();
	large2BurstTween.add(burst3.tween, burst4.tween);


	var burst5Option = { delay: (delay + 1275) * S, radius: { 15: 30 }, count: 2, shiftX: { 0: 150 }, shiftY: { 0: "-25" } };
	var burst6Option = {
	  x: "-20%", shiftX: { 0: -150 }, angle: { 0: "25" },
	  onStart: function () {
	    fall3Sound.play();
	  }
	};
	mojs.h.extend(burst5Option, burstOption);
	mojs.h.extend(burst6Option, burst5Option);
	var burst5 = new mojs.Burst(burst5Option);
	var burst6 = new mojs.Burst(burst6Option);
	var large3BurstTween = new mojs.Tween();
	large3BurstTween.add(burst5.tween, burst6.tween);


	var burst7Option = { delay: (delay + 1550) * S, radius: { 5: 12 }, count: 1, shiftX: { 0: 80 }, shiftY: { 0: "-15" } };
	var burst8Option = {
	  x: "-20%", shiftX: { 0: -80 }, angle: { 0: "15" },
	  onStart: function () {
	    fall4Sound.play();
	  }
	};
	mojs.h.extend(burst7Option, burstOption);
	mojs.h.extend(burst8Option, burst7Option);
	var burst7 = new mojs.Burst(burst7Option);
	var burst8 = new mojs.Burst(burst8Option);
	var large4BurstTween = new mojs.Tween();
	large4BurstTween.add(burst7.tween, burst8.tween);

	var burst9Option = { delay: (delay + 1725) * S, radius: { 5: 12 }, count: 1, shiftX: { 0: 60 }, shiftY: { 0: "-10" }, childOptions: { radius: { 3: 0 } } };
	var burst10Option = {
	  x: "-20%", shiftX: { 0: -60 }, angle: { 0: "10" },
	  onStart: function () {
	    fall5Sound.play();
	  }
	};
	mojs.h.extend(burst9Option, burstOption);
	mojs.h.extend(burst10Option, burst9Option);
	var burst9 = new mojs.Burst(burst9Option);
	var burst10 = new mojs.Burst(burst10Option);
	var large5BurstTween = new mojs.Tween();
	large5BurstTween.add(burst9.tween, burst10.tween);


	var anticipationEasing = mojs.easing.path("M0,100 C0,100 15.6074219,-55.2309585 14.7695313,100 C14.7695313,101.017824 13.2785395,120.164045 26.953125,128.024416 C33.6923828,132.121096 65.6133582,130.778973 77.6015625,126.065432 C98.8678283,117.703926 100,100 100,100");
	var anticipatingTranslateEasing = mojs.easing.path("M0,100 C4.21746922,99.7372437 10.3541277,99.737239 15.2145981,99.7372416 C15.9513935,56.8790926 26.4565296,0.054296106 42.4745979,0.0542961084 C53.7859535,0.0542960547 100,0 100,0");

	var timeline2 = new mojs.Timeline({
	  delay: 1000 * S,
	  duration: 2200 * S,
	  onComplete: function () {
	    tween.start();
	  },
	  onUpdate: function (p) {
	    var anticipationProgress = anticipationEasing(p);
	    var anticipationTranslateProgress = 1 - anticipatingTranslateEasing(p);

	    cube.style["-webkit-transform"] = "translate3d(0, " + (translateY - 600 * (1 - anticipationTranslateProgress)) + "px, 0)";
	    cubeSquash.style["-webkit-transform"] = "scaleX(" + (1 + anticipationProgress) + ")\n                                  scaleY(" + (1 - anticipationProgress) + ")";

	    shadow.style.opacity = anticipationTranslateProgress * 1.2 / 2;

	    var scale = anticipationProgress > 0 ? 1 + anticipationProgress : 1 - anticipationProgress;
	    shadow.style["-webkit-transform"] = "scale(" + scale + ")\n                              translateX(" + 6 * anticipationProgress + "px)\n                              translateY(" + 6 * anticipationProgress + "px)\n                              rotateY(" + -17 * anticipationProgress + "deg)\n                              rotateX(" + 17 * anticipationProgress + "deg)";
	  }
	});

	var tween2 = new mojs.Tween();
	tween2.add(timeline2);

	var tween = new mojs.Tween({ onComplete: function () {
	    return tween2.start();
	  } });
	tween.add(timeline //,
	// largeBurstTween, large2BurstTween,
	// large3BurstTween, large4BurstTween,
	// large5BurstTween
	);

	tween.start();

	// setInterval(function () {
	//   tween.start();
	// }, ((duration*1000*2)+1000)*S)

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.4.10
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(global, framework, undefined){
	'use strict';

	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/

	  // Shortcuts for [[Class]] & property names
	var OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';

	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it != null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var buildIn = {
	  Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
	  Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp:1 
	} , toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return it == undefined ? it === undefined
	    ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var klass = cof(it), tag;
	  return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
	}

	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var fn     = assertFunction(this)
	    , length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , i = 0, j = 0, _args;
	    if(!holder && !_length)return invoke(fn, args, that);
	    _args = args.slice();
	    if(holder)for(;length > i; i++)if(_args[i] === _)_args[i] = arguments[j++];
	    while(_length > j)_args.push(arguments[j++]);
	    return invoke(fn, _args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	function construct(target, argumentsList /*, newTarget*/){
	  var proto    = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE]
	    , instance = create(isObject(proto) ? proto : ObjectProto)
	    , result   = apply.call(target, instance, argumentsList);
	  return isObject(result) ? result : instance;
	}

	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , isFrozen         = Object.isFrozen
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object
	  , Dict;
	function toObject(it){
	  return ES5Object(assertDefined(it));
	}
	function returnIt(it){
	  return it;
	}
	function returnThis(){
	  return this;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  assertObject(it);
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}

	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}

	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}

	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}

	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}

	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC   = !!function(){try{return defineProperty({}, DOT, ObjectProto)}catch(e){}}()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}

	var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
	  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {}
	  , SYMBOL_SPECIES     = getWellKnownSymbol('species');
	function setSpecies(C){
	  if(framework || !isNative(C))defineProperty(C, SYMBOL_SPECIES, {
	    configurable: true,
	    get: returnThis
	  });
	}

	// Iterators
	var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR)
	  , SYMBOL_TAG      = getWellKnownSymbol(TO_STRING_TAG)
	  , SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto
	  , ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	  , NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto
	    // Safari define byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function forOf(iterable, entries, fn, that){
	  var iterator = getIterator(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false)return;
	}

	// core
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  , exportGlobal
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	else if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	else exportGlobal = true;
	if(exportGlobal || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}

	/******************************************************************************
	 * Module : global                                                            *
	 ******************************************************************************/

	$define(GLOBAL + FORCED, {global: global});

	/******************************************************************************
	 * Module : es6_symbol                                                        *
	 ******************************************************************************/

	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, AllSymbols, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description)
	        , sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
	      AllSymbols[tag] = sym;
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return sym;
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR,
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.10 Symbol.species
	    species: SYMBOL_SPECIES,
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    // 19.4.2.14 Symbol.unscopables
	    unscopables: SYMBOL_UNSCOPABLES,
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'),
	    function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	    // 19.1.2.7 Object.getOwnPropertyNames(O)
	    getOwnPropertyNames: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
	      return result;
	    },
	    // 19.1.2.8 Object.getOwnPropertySymbols(O)
	    getOwnPropertySymbols: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	      return result;
	    }
	  });
	}(safeSymbol('tag'), {}, {}, true);

	/******************************************************************************
	 * Module : es6                                                               *
	 ******************************************************************************/

	// ECMAScript 6 shim
	!function(RegExpProto, isFinite, tmp, NAME){
	  var RangeError = global.RangeError
	      // 20.1.2.3 Number.isInteger(number)
	    , isInteger = Number.isInteger || function(it){
	        return !isObject(it) && isFinite(it) && floor(it) === it;
	      }
	      // 20.2.2.28 Math.sign(x)
	    , sign = Math.sign || function sign(x){
	        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	      }
	    , E    = Math.E
	    , pow  = Math.pow
	    , abs  = Math.abs
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , fcc  = String.fromCharCode
	    , at   = createPointAt(true);
	  
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  // 20.2.2.14 Math.expm1(x)
	  function expm1(x){
	    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
	  }
	  
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	  
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x = +x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x = +x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: expm1,
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    hypot: function(value1, value2){
	      var sum  = 0
	        , len1 = arguments.length
	        , len2 = len1
	        , args = Array(len1)
	        , larg = -Infinity
	        , arg;
	      while(len1--){
	        arg = args[len1] = +arguments[len1];
	        if(arg == Infinity || arg == -Infinity)return Infinity;
	        if(arg > larg)larg = arg;
	      }
	      larg = arg || 1;
	      while(len2--)sum += pow(args[len2] / larg, 2);
	      return larg * sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xn = +x
	        , yn = +y
	        , xl = UInt16 & xn
	        , yl = UInt16 & yn;
	      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      var a = expm1(x = +x)
	        , b = expm1(-x);
	      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  
	  function assertNotRegExp(it){
	    if(cof(it) == REGEXP)throw TypeError();
	  }
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fcc(code)
	          : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = toObject(callSite.raw)
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , result  = new (generic(this, Array))
	        , mapfn   = arguments[1]
	        , that    = arguments[2]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, that, 2) : undefined
	        , index   = 0
	        , length;
	      if(isIterable(O))for(var iter = getIterator(O), step; !(step = iter.next()).done; index++){
	        result[index] = mapping ? f(step.value, index) : step.value;
	      } else for(length = toLength(O.length); length > index; index++){
	        result[index] = mapping ? f(O[index], index) : O[index];
	      }
	      result.length = index;
	      return result;
	    },
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length)return iter.o = undefined, iterResult(1);
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	  
	  // Object static methods accept primitives
	  function wrapObjectMethod(key, MODE){
	    var fn  = Object[key]
	      , exp = core[OBJECT][key]
	      , f   = 0
	      , o   = {};
	    if(!exp || isNative(exp)){
	      o[key] =
	        MODE == 1 ? function(it){ return isObject(it) ? fn(it) : it } :
	        MODE == 2 ? function(it){ return isObject(it) ? fn(it) : true } :
	        MODE == 3 ? function(it){ return isObject(it) ? fn(it) : false } :
	        MODE == 4 ? function(it, key){ return fn(toObject(it), key) } :
	                    function(it){ return fn(toObject(it)) }
	      try { fn(DOT) }
	      catch(e){ f = 1}
	      $define(STATIC + FORCED * f, OBJECT, o);
	    }
	  }
	  wrapObjectMethod('freeze', 1);
	  wrapObjectMethod('seal', 1);
	  wrapObjectMethod('preventExtensions', 1);
	  wrapObjectMethod('isFrozen', 2);
	  wrapObjectMethod('isSealed', 2);
	  wrapObjectMethod('isExtensible', 3);
	  wrapObjectMethod('getOwnPropertyDescriptor', 4);
	  wrapObjectMethod('getPrototypeOf');
	  wrapObjectMethod('keys');
	  wrapObjectMethod('getOwnPropertyNames');
	  
	  if(framework){
	    // 19.1.3.6 Object.prototype.toString()
	    tmp[SYMBOL_TAG] = DOT;
	    if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
	      return '[object ' + classof(this) + ']';
	    });
	    
	    // 19.2.4.2 name
	    NAME in FunctionProto || defineProperty(FunctionProto, NAME, {
	      configurable: true,
	      get: function(){
	        var match = String(this).match(/^\s*function ([^ (]*)/)
	          , name  = match ? match[1] : '';
	        has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
	        return name;
	      },
	      set: function(value){
	        has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
	      }
	    });
	    
	    // RegExp allows a regex with flags as the pattern
	    if(DESC && !function(){try{return RegExp(/a/g, 'i') == '/a/i'}catch(e){}}()){
	      var _RegExp = RegExp;
	      RegExp = function RegExp(pattern, flags){
	        return new _RegExp(cof(pattern) == REGEXP && flags !== undefined
	          ? pattern.source : pattern, flags);
	      }
	      forEach.call(getNames(_RegExp), function(key){
	        key in RegExp || defineProperty(RegExp, key, {
	          configurable: true,
	          get: function(){ return _RegExp[key] },
	          set: function(it){ _RegExp[key] = it }
	        });
	      });
	      RegExpProto[CONSTRUCTOR] = RegExp;
	      RegExp[PROTOTYPE] = RegExpProto;
	      hidden(global, REGEXP, RegExp);
	    }
	    
	    // 21.2.5.3 get RegExp.prototype.flags()
	    if(/./g.flags != 'g')defineProperty(RegExpProto, 'flags', {
	      configurable: true,
	      get: createReplacer(/^.*\/(\w*)$/, '$1')
	    });
	    
	    // 22.1.3.31 Array.prototype[@@unscopables]
	    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
	      ArrayUnscopables[it] = true;
	    });
	    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	  }
	  
	  setSpecies(RegExp);
	  setSpecies(Array);
	}(RegExp[PROTOTYPE], isFinite, {}, 'name');

	/******************************************************************************
	 * Module : immediate                                                         *
	 ******************************************************************************/

	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(part.call(run, id), 0);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});

	/******************************************************************************
	 * Module : es6_promise                                                       *
	 ******************************************************************************/

	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(function(){})) == test
	  || function(asap, DEF){
	    function isThenable(o){
	      var then;
	      if(isObject(o))then = o.then;
	      return isFunction(then) ? then : false;
	    }
	    function notify(def){
	      var chain = def.chain;
	      chain.length && asap(function(){
	        var msg = def.msg
	          , ok  = def.state == 1
	          , i   = 0;
	        while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              ret = cb === true ? msg : cb(msg);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(msg);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(msg){
	      var def = this
	        , then, wrapper;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      try {
	        if(then = isThenable(msg)){
	          wrapper = {def: def, done: false}; // wrap
	          then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          def.msg = msg;
	          def.state = 1;
	          notify(def);
	        }
	      } catch(err){
	        reject.call(wrapper || {def: def, done: false}, err); // wrap
	      }
	    }
	    function reject(msg){
	      var def = this;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      def.msg = msg;
	      def.state = 2;
	      notify(def);
	    }
	    function getConstructor(C){
	      var S = assertObject(C)[SYMBOL_SPECIES];
	      return S != undefined ? S : C;
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var def = {chain: [], state: 0, done: false, msg: undefined};
	      hidden(this, DEF, def);
	      try {
	        executor(ctx(resolve, def, 1), ctx(reject, def, 1));
	      } catch(err){
	        reject.call(def, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), def = this[DEF];
	        def.chain.push(react);
	        def.state && notify(def);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = getConstructor(this)
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = getConstructor(this);
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new (getConstructor(this))(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && DEF in x && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new (getConstructor(this))(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('def'));
	  setToStringTag(Promise, PROMISE);
	  setSpecies(Promise);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);

	/******************************************************************************
	 * Module : es6_collections                                                   *
	 ******************************************************************************/

	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , O1    = safeSymbol('O1')
	    , WEAK  = safeSymbol('weak')
	    , LEAK  = safeSymbol('leak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0
	    , tmp   = {};
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      if(framework)proto[key] = function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      };
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, O1, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(!NATIVE_ITERATORS || !C.length){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	        if(framework)proto[CONSTRUCTOR] = C;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    setSpecies(C);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        return iter.o = undefined, iterResult(1);
	      }
	      // return step by kind
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return primitive with prefix
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // can't set id to frozen object
	    if(isFrozen(it))return 'F';
	    if(!has(it, UID)){
	      // not necessary to add id
	      if(!create)return 'E';
	      // add missing object id
	      hidden(it, UID, ++uid);
	    // return object id with prefix
	    } return 'O' + it[UID];
	  }
	  function getEntry(that, key){
	    // fast case
	    var index = fastKey(key), entry;
	    if(index != 'F')return that[O1][index];
	    // frozen object case
	    for(entry = that[FIRST]; entry; entry = entry.n){
	      if(entry.k == key)return entry;
	    }
	  }
	  function def(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry)entry.v = value;
	    // create new entry
	    else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index != 'F')that[O1][index] = entry;
	    } return that;
	  }

	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	        entry.r = true;
	        entry.p = entry.n = undefined;
	        delete data[entry.i];
	      }
	      that[FIRST] = that[LAST] = undefined;
	      that[SIZE] = 0;
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var that  = this
	        , entry = getEntry(that, key);
	      if(entry){
	        var next = entry.n
	          , prev = entry.p;
	        delete that[O1][entry.i];
	        entry.r = true;
	        if(prev)prev.n = next;
	        if(next)next.p = prev;
	        if(that[FIRST] == entry)that[FIRST] = next;
	        if(that[LAST] == entry)that[LAST] = prev;
	        that[SIZE]--;
	      } return !!entry;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        // revert to the last existing entry
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return !!getEntry(this, key);
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = getEntry(this, key);
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function defWeak(that, key, value){
	    if(isFrozen(assertObject(key)))leakStore(that).set(key, value);
	    else {
	      has(key, WEAK) || hidden(key, WEAK, {});
	      key[WEAK][that[UID]] = value;
	    } return that;
	  }
	  function leakStore(that){
	    return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
	  }
	  
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this)['delete'](key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this).has(key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]);
	    }
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key)){
	        if(isFrozen(key))return leakStore(this).get(key);
	        if(has(key, WEAK))return key[WEAK][this[UID]];
	      }
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return defWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // IE11 WeakMap frozen keys fix
	  if(framework && DESC && new WeakMap([[Object.freeze(tmp), 7]]).get(tmp) != 7){
	    forEach.call(array('delete,has,get,set'), function(key){
	      var method = WeakMap[PROTOTYPE][key];
	      WeakMap[PROTOTYPE][key] = function(a, b){
	        // store frozen objects on leaky map
	        if(isObject(a) && isFrozen(a)){
	          var result = leakStore(this)[key](a, b);
	          return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	        } return method.call(this, a, b);
	      };
	    });
	  }
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return defWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();

	/******************************************************************************
	 * Module : es6_reflect                                                       *
	 ******************************************************************************/

	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return desc.get ? desc.get.call(receiver) : desc.value;
	    return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
	  }
	  function reflectSet(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc){
	      if(desc.writable === false)return false;
	      if(desc.set)return desc.set.call(receiver, V), true;
	    }
	    if(isObject(proto = getPrototypeOf(target)))return reflectSet(proto, propertyKey, V, receiver);
	    desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	    desc.value = V;
	    return defineProperty(receiver, propertyKey, desc), true;
	  }
	  var isExtensible = Object.isExtensible || returnIt;
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	    construct: construct,
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: function(target, propertyKey){
	      return getOwnDescriptor(assertObject(target), propertyKey);
	    },
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: function(target){
	      return getPrototypeOf(assertObject(target));
	    },
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: function(target){
	      return !!isExtensible(assertObject(target));
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();

	/******************************************************************************
	 * Module : es7                                                               *
	 ******************************************************************************/

	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = toObject(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values: createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();

	/******************************************************************************
	 * Module : es7_refs                                                          *
	 ******************************************************************************/

	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');

	/******************************************************************************
	 * Module : dom_itarable                                                      *
	 ******************************************************************************/

	!function(NodeList){
	  if(framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){
	    hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	  }
	  Iterators.NodeList = Iterators[ARRAY];
	}(global.NodeList);

	/******************************************************************************
	 * Module : dict                                                              *
	 ******************************************************************************/

	!function(DICT){
	  Dict = function(iterable){
	    var dict = create(null);
	    if(iterable != undefined){
	      if(isIterable(iterable)){
	        for(var iter = getIterator(iterable), step, value; !(step = iter.next()).done;){
	          value = step.value;
	          dict[value[0]] = value[1];
	        }
	      } else assign(dict, iterable);
	    }
	    return dict;
	  }
	  Dict[PROTOTYPE] = null;
	  
	  function DictIterator(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), a: getKeys(iterated), i: 0, k: kind});
	  }
	  createIterator(DictIterator, DICT, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , keys  = iter.a
	      , kind  = iter.k
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!has(O, key = keys[iter.i++]));
	    if(kind == KEY)  return iterResult(0, key);
	    if(kind == VALUE)return iterResult(0, O[key]);
	                     return iterResult(0, [key, O[key]]);
	  });
	  function createDictIter(kind){
	    return function(it){
	      return new DictIterator(it, kind);
	    }
	  }
	  
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findKey
	   * 7 -> mapPairs
	   */
	  function createDictMethod(type){
	    var isMap    = type == 1
	      , isEvery  = type == 4;
	    return function(object, callbackfn, that /* = undefined */){
	      var f      = ctx(callbackfn, that, 3)
	        , O      = toObject(object)
	        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
	        , key, val, res;
	      for(key in O)if(has(O, key)){
	        val = O[key];
	        res = f(val, key, object);
	        if(type){
	          if(isMap)result[key] = res;             // map
	          else if(res)switch(type){
	            case 2: result[key] = val; break      // filter
	            case 3: return true;                  // some
	            case 5: return val;                   // find
	            case 6: return key;                   // findKey
	            case 7: result[res[0]] = res[1];      // mapPairs
	          } else if(isEvery)return false;         // every
	        }
	      }
	      return type == 3 || isEvery ? isEvery : result;
	    }
	  }
	  function createDictReduce(isTurn){
	    return function(object, mapfn, init){
	      assertFunction(mapfn);
	      var O      = toObject(object)
	        , keys   = getKeys(O)
	        , length = keys.length
	        , i      = 0
	        , memo, key, result;
	      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
	      else if(arguments.length < 3){
	        assert(length, REDUCE_ERROR);
	        memo = O[keys[i++]];
	      } else memo = Object(init);
	      while(length > i)if(has(O, key = keys[i++])){
	        result = mapfn(memo, O[key], key, object);
	        if(isTurn){
	          if(result === false)break;
	        } else memo = result;
	      }
	      return memo;
	    }
	  }
	  var findKey = createDictMethod(6);
	  function includes(object, el){
	    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	  }
	  
	  var dictMethods = {
	    keys:    createDictIter(KEY),
	    values:  createDictIter(VALUE),
	    entries: createDictIter(KEY+VALUE),
	    forEach: createDictMethod(0),
	    map:     createDictMethod(1),
	    filter:  createDictMethod(2),
	    some:    createDictMethod(3),
	    every:   createDictMethod(4),
	    find:    createDictMethod(5),
	    findKey: findKey,
	    mapPairs:createDictMethod(7),
	    reduce:  createDictReduce(false),
	    turn:    createDictReduce(true),
	    keyOf:   keyOf,
	    includes:includes,
	    // Has / get / set own property
	    has: has,
	    get: get,
	    set: createDefiner(0),
	    isDict: function(it){
	      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	    }
	  };
	  
	  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
	    function method(){
	      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
	      return invoke(fn, args);
	    }
	    fn[REFERENCE_GET] = function(){
	      return method;
	    }
	  }(dictMethods[key]);
	  
	  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
	}('Dict');

	/******************************************************************************
	 * Module : $for                                                              *
	 ******************************************************************************/

	!function(ENTRIES, FN){  
	  function $for(iterable, entries){
	    if(!(this instanceof $for))return new $for(iterable, entries);
	    this[ITER]    = getIterator(iterable);
	    this[ENTRIES] = !!entries;
	  }
	  
	  createIterator($for, 'Wrapper', function(){
	    return this[ITER].next();
	  });
	  var $forProto = $for[PROTOTYPE];
	  setIterator($forProto, function(){
	    return this[ITER]; // unwrap
	  });
	  
	  function createChainIterator(next){
	    function Iter(I, fn, that){
	      this[ITER]    = getIterator(I);
	      this[ENTRIES] = I[ENTRIES];
	      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	    }
	    createIterator(Iter, 'Chain', next, $forProto);
	    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	    return Iter;
	  }
	  
	  var MapIter = createChainIterator(function(){
	    var step = this[ITER].next();
	    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	  });
	  
	  var FilterIter = createChainIterator(function(){
	    for(;;){
	      var step = this[ITER].next();
	      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
	    }
	  });
	  
	  assignHidden($forProto, {
	    of: function(fn, that){
	      forOf(this, this[ENTRIES], fn, that);
	    },
	    array: function(fn, that){
	      var result = [];
	      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	      return result;
	    },
	    filter: function(fn, that){
	      return new FilterIter(this, fn, that);
	    },
	    map: function(fn, that){
	      return new MapIter(this, fn, that);
	    }
	  });
	  
	  $for.isIterable  = isIterable;
	  $for.getIterator = getIterator;
	  
	  $define(GLOBAL + FORCED, {$for: $for});
	}('entries', safeSymbol('fn'));

	/******************************************************************************
	 * Module : binding                                                           *
	 ******************************************************************************/

	!function(_, toLocaleString){
	  // Placeholder
	  core._ = path._ = path._ || {};

	  $define(PROTO + FORCED, FUNCTION, {
	    part: part,
	    only: function(numberArguments, that /* = @ */){
	      var fn     = assertFunction(this)
	        , n      = toLength(numberArguments)
	        , isThat = arguments.length > 1;
	      return function(/* ...args */){
	        var length = min(n, arguments.length)
	          , args   = Array(length)
	          , i      = 0;
	        while(length > i)args[i] = arguments[i++];
	        return invoke(fn, args, isThat ? that : this);
	      }
	    }
	  });
	  
	  function tie(key){
	    var that  = this
	      , bound = {};
	    return hidden(that, _, function(key){
	      if(key === undefined || !(key in that))return toLocaleString.call(that);
	      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
	    })[_](key);
	  }
	  
	  hidden(path._, TO_STRING, function(){
	    return _;
	  });
	  
	  hidden(ObjectProto, _, tie);
	  DESC || hidden(ArrayProto, _, tie);
	  // IE8- dirty hack - redefined toLocaleString is not enumerable
	}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);

	/******************************************************************************
	 * Module : object                                                            *
	 ******************************************************************************/

	!function(){
	  function define(target, mixin){
	    var keys   = ownKeys(toObject(mixin))
	      , length = keys.length
	      , i = 0, key;
	    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	    return target;
	  };
	  $define(STATIC + FORCED, OBJECT, {
	    isObject: isObject,
	    classof: classof,
	    define: define,
	    make: function(proto, mixin){
	      return define(create(proto), mixin);
	    }
	  });
	}();

	/******************************************************************************
	 * Module : array                                                             *
	 ******************************************************************************/

	$define(PROTO + FORCED, ARRAY, {
	  turn: function(fn, target /* = [] */){
	    assertFunction(fn);
	    var memo   = target == undefined ? [] : Object(target)
	      , O      = ES5Object(this)
	      , length = toLength(O.length)
	      , index  = 0;
	    while(length > index)if(fn(memo, O[index], index++, this) === false)break;
	    return memo;
	  }
	});
	if(framework)ArrayUnscopables.turn = true;

	/******************************************************************************
	 * Module : array_statics                                                     *
	 ******************************************************************************/

	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});

	/******************************************************************************
	 * Module : number                                                            *
	 ******************************************************************************/

	!function(numberMethods){  
	  function NumberIterator(iterated){
	    set(this, ITER, {l: toLength(iterated), i: 0});
	  }
	  createIterator(NumberIterator, NUMBER, function(){
	    var iter = this[ITER]
	      , i    = iter.i++;
	    return i < iter.l ? iterResult(0, i) : iterResult(1);
	  });
	  defineIterator(Number, NUMBER, function(){
	    return new NumberIterator(this);
	  });
	  
	  numberMethods.random = function(lim /* = 0 */){
	    var a = +this
	      , b = lim == undefined ? 0 : +lim
	      , m = min(a, b);
	    return random() * (max(a, b) - m) + m;
	  };

	  forEach.call(array(
	      // ES3:
	      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
	      // ES6:
	      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
	    ), function(key){
	      var fn = Math[key];
	      if(fn)numberMethods[key] = function(/* ...args */){
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this]
	          , i    = 0;
	        while(arguments.length > i)args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	    }
	  );
	  
	  $define(PROTO + FORCED, NUMBER, numberMethods);
	}({});

	/******************************************************************************
	 * Module : string                                                            *
	 ******************************************************************************/

	!function(){
	  var escapeHTMLDict = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&apos;'
	  }, unescapeHTMLDict = {}, key;
	  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
	  $define(PROTO + FORCED, STRING, {
	    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
	    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	  });
	}();

	/******************************************************************************
	 * Module : date                                                              *
	 ******************************************************************************/

	!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
	  function createFormat(prefix){
	    return function(template, locale /* = current */){
	      var that = this
	        , dict = locales[has(locales, locale) ? locale : current];
	      function get(unit){
	        return that[prefix + unit]();
	      }
	      return String(template).replace(formatRegExp, function(part){
	        switch(part){
	          case 's'  : return get(SECONDS);                  // Seconds : 0-59
	          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
	          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
	          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
	          case 'h'  : return get(HOURS);                    // Hours   : 0-23
	          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
	          case 'D'  : return get(DATE);                     // Date    : 1-31
	          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
	          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
	          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
	          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
	          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
	          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
	          case 'Y'  : return get(YEAR);                     // Year    : 2014
	          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
	        } return part;
	      });
	    }
	  }
	  function lz(num){
	    return num > 9 ? num : '0' + num;
	  }
	  function addLocale(lang, locale){
	    function split(index){
	      var result = [];
	      forEach.call(array(locale.months), function(it){
	        result.push(it.replace(flexioRegExp, '$' + index));
	      });
	      return result;
	    }
	    locales[lang] = [array(locale.weekdays), split(1), split(2)];
	    return core;
	  }
	  $define(PROTO + FORCED, DATE, {
	    format:    createFormat('get'),
	    formatUTC: createFormat('getUTC')
	  });
	  addLocale(current, {
	    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
	    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
	  });
	  addLocale('ru', {
	    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
	    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
	            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
	  });
	  core.locale = function(locale){
	    return has(locales, locale) ? current = locale : current;
	  };
	  core.addLocale = addLocale;
	}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
	}(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), false);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*! 
	  :: mo · js :: motion graphics toolbelt for the web
	  Oleg Solomka @LegoMushroom 2015 MIT
	  0.121.3 
	*/

	!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.yes=t()}}(function(){var t;return function e(t,r,s){function i(o,p){if(!r[o]){if(!t[o]){var a="function"==typeof require&&require;if(!p&&a)return require(o,!0);if(n)return n(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var u=r[o]={exports:{}};t[o][0].call(u.exports,function(e){var r=t[o][1][e];return i(r?r:e)},u,u.exports,e,t,r,s)}return r[o].exports}for(var n="function"==typeof require&&require,o=0;o<s.length;o++)i(s[o]);return i}({1:[function(t,e,r){(function(r){var s,i,n,o=[].indexOf||function(t){for(var e=0,r=this.length;r>e;e++)if(e in this&&this[e]===t)return e;return-1};n=t("./h"),s=function(){function t(t){return this.vars(),this.generate}return t.prototype.vars=function(){return this.generate=n.bind(this.generate,this)},t.prototype.generate=function(t,e,s,i){var n,p,a,h,u,l,c,d,f,y,g,m,v,w,x,b,_,S,M,T,P,E,O,k;if(arguments.length<4)return this.error("Bezier function expects 4 arguments");for(_=S=0;4>S;_=++S)if(f=arguments[_],"number"!=typeof f||isNaN(f)||!isFinite(f))return this.error("Bezier function expects 4 arguments");return 0>t||t>1||0>s||s>1?this.error("Bezier x values should be > 0 and < 1"):(h=4,u=.001,c=1e-7,l=10,T=11,M=1/(T-1),w=o.call(r,"Float32Array")>=0,n=function(t,e){return 1-3*e+3*t},p=function(t,e){return 3*e-6*t},a=function(t){return 3*t},g=function(t,e,r){return((n(e,r)*t+p(e,r))*t+a(e))*t},x=function(t,e,r){return 3*n(e,r)*t*t+2*p(e,r)*t+a(e)},E=function(e,r){var i,n;for(_=0;h>_;){if(i=x(r,t,s),0===i)return r;n=g(r,t,s)-e,r-=n/i,++_}return r},m=function(){for(_=0;T>_;)P[_]=g(_*M,t,s),++_},y=function(e,r,i){var n,o,p;for(o=void 0,n=void 0,_=0;;)if(n=r+(i-r)/2,o=g(n,t,s)-e,o>0?i=n:r=n,p=Math.abs(o)>c,!(p&&++_<l))break;return n},b=function(e){var r,i,n,o,p,a,h;for(a=0,r=1,h=T-1;r!==h&&P[r]<=e;)a+=M,++r;return--r,i=P[r+1]-P[r],n=(e-P[r])/i,o=a+n*M,p=x(o,t,s),p>=u?E(e,o):0===p?o:y(e,a,a+M)},O=function(){var r;r=!0,(t!==e||s!==i)&&m()},P=w?new Float32Array(T):new Array(T),d=!1,v=function(r){return d||O(),t===e&&s===i?r:0===r?0:1===r?1:g(b(r),e,i)},k="bezier("+[t,e,s,i]+")",v.toStr=function(){return k},v)},t.prototype.error=function(t){return n.error(t)},t}(),i=new s,e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./h":4}],2:[function(t,e,r){var s,i,n,o,p,a,h=function(t,e){function r(){this.constructor=t}for(var s in e)u.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},u={}.hasOwnProperty;p=t("./shapes/bitsMap"),o=t("./tween/tween"),n=t("./transit"),i=t("./swirl"),a=t("./h"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return h(e,t),e.prototype.skipProps={childOptions:1},e.prototype.defaults={count:5,degree:360,opacity:1,randomAngle:0,randomRadius:0,x:100,y:100,shiftX:0,shiftY:0,easing:"Linear.None",radius:{25:75},radiusX:void 0,radiusY:void 0,angle:0,size:null,sizeGap:0,duration:600,delay:0,onStart:null,onComplete:null,onCompleteChain:null,onUpdate:null,isResetAngles:!1},e.prototype.childDefaults={radius:{7:0},radiusX:void 0,radiusY:void 0,angle:0,opacity:1,onStart:null,onComplete:null,onUpdate:null,points:3,duration:500,delay:0,repeat:0,yoyo:!1,easing:"Linear.None",type:"circle",fill:"deeppink",fillOpacity:1,isSwirl:!1,swirlSize:10,swirlFrequency:3,stroke:"transparent",strokeWidth:0,strokeOpacity:1,strokeDasharray:"",strokeDashoffset:"",strokeLinecap:null},e.prototype.optionsIntersection={radius:1,radiusX:1,radiusY:1,angle:1,opacity:1,onStart:1,onComplete:1,onUpdate:1},e.prototype.run=function(t){var e,r,s,i,n,o,p,a,h,u,l;if(null!=t&&Object.keys(t).length){for((t.count||(null!=(h=t.childOptions)?h.count:void 0))&&this.h.warn("Sorry, count can not be changed on run"),this.extendDefaults(t),n=Object.keys(t.childOptions||{}),null==(e=this.o).childOptions&&(e.childOptions={}),r=s=0,p=n.length;p>s;r=++s)i=n[r],this.o.childOptions[i]=t.childOptions[i];for(o=this.transits.length;o--;)a=this.getOption(o),null==(null!=(u=t.childOptions)?u.angle:void 0)&&null==t.angleShift?a.angle=this.transits[o].o.angle:t.isResetAngles||(a.angle=this.getBitAngle(a.angle,o)),this.transits[o].tuneNewOption(a,!0);this.tween.recalcDuration()}if(this.props.randomAngle||this.props.randomRadius)for(o=this.transits.length;o--;)l=this.transits[o],this.props.randomAngle&&l.setProp({angleShift:this.generateRandomAngle()}),this.props.randomRadius&&l.setProp({radiusScale:this.generateRandomRadius()});return this.startTween()},e.prototype.createBit=function(){var t,e,r,s,n;for(this.transits=[],n=[],t=e=0,s=this.props.count;s>=0?s>e:e>s;t=s>=0?++e:--e)r=this.getOption(t),r.ctx=this.ctx,r.index=t,r.isDrawLess=r.isRunLess=r.isTweenLess=!0,this.props.randomAngle&&(r.angleShift=this.generateRandomAngle()),this.props.randomRadius&&(r.radiusScale=this.generateRandomRadius()),n.push(this.transits.push(new i(r)));return n},e.prototype.addBitOptions=function(){var t,e,r,s,i,n,o,p,a,h,u;for(o=this.props.count,this.degreeCnt=this.props.degree%360===0?o:o-1||1,h=this.props.degree/this.degreeCnt,p=this.transits,a=[],e=r=0,s=p.length;s>r;e=++r)u=p[e],t=u.props.angleShift||0,n=this.getSidePoint("start",e*h+t),i=this.getSidePoint("end",e*h+t),u.o.x=this.getDeltaFromPoints("x",n,i),u.o.y=this.getDeltaFromPoints("y",n,i),this.props.isResetAngles||(u.o.angle=this.getBitAngle(u.o.angle,e)),a.push(u.extendDefaults());return a},e.prototype.getBitAngle=function(t,e){var r,s,i,n,o,p,a,h,u,l,c,d;return l=this.props.count,n=this.props.degree%360===0?l:l-1||1,d=this.props.degree/n,r=e*d+90,s=this.transits[e].props.angleShift||0,t="object"!=typeof t?t+r+s:(a=Object.keys(t),c=a[0],p=t[c],i=r+s,u=parseFloat(c)+i,h=parseFloat(p)+i,o={},o[u]=h,o)},e.prototype.getSidePoint=function(t,e){var r,s;return s=this.getSideRadius(t),r=this.h.getRadialPoint({radius:s.radius,radiusX:s.radiusX,radiusY:s.radiusY,angle:e,center:{x:this.props.center,y:this.props.center}})},e.prototype.getSideRadius=function(t){return{radius:this.getRadiusByKey("radius",t),radiusX:this.getRadiusByKey("radiusX",t),radiusY:this.getRadiusByKey("radiusY",t)}},e.prototype.getRadiusByKey=function(t,e){return null!=this.deltas[t]?this.deltas[t][e]:null!=this.props[t]?this.props[t]:void 0},e.prototype.getDeltaFromPoints=function(t,e,r){var s;return s={},e[t]===r[t]?s=e[t]:(s[e[t]]=r[t],s)},e.prototype.draw=function(t){return this.drawEl()},e.prototype.isNeedsTransform=function(){return this.isPropChanged("shiftX")||this.isPropChanged("shiftY")||this.isPropChanged("angle")},e.prototype.fillTransform=function(){return"rotate("+this.props.angle+"deg) translate("+this.props.shiftX+", "+this.props.shiftY+")"},e.prototype.createTween=function(){var t,r;for(e.__super__.createTween.apply(this,arguments),t=this.transits.length,r=[];t--;)r.push(this.tween.add(this.transits[t].timeline));return r},e.prototype.calcSize=function(){var t,e,r,s,i,n,o;for(r=-1,n=this.transits,t=e=0,s=n.length;s>e;t=++e)o=n[t],o.calcSize(),r<o.props.size&&(r=o.props.size);return i=this.calcMaxRadius(),this.props.size=r+2*i,this.props.size+=2*this.props.sizeGap,this.props.center=this.props.size/2,this.addBitOptions()},e.prototype.getOption=function(t){var e,r,s,i;for(i={},r=Object.keys(this.childDefaults),s=r.length;s--;)e=r[s],i[e]=this.getPropByMod({key:e,i:t,from:this.o.childOptions}),this.optionsIntersection[e]?null==i[e]&&(i[e]=this.getPropByMod({key:e,i:t,from:this.childDefaults})):(null==i[e]&&(i[e]=this.getPropByMod({key:e,i:t,from:this.o})),null==i[e]&&(i[e]=this.getPropByMod({key:e,i:t,from:this.childDefaults})));return i},e.prototype.getPropByMod=function(t){var e,r;return e=null!=(r=t.from||this.o.childOptions)?r[t.key]:void 0,this.h.isArray(e)?e[t.i%e.length]:e},e.prototype.generateRandomAngle=function(t){var e,r;return r=parseFloat(this.props.randomAngle),e=r>1?1:0>r?0:void 0,this.h.rand(0,r?360*r:180)},e.prototype.generateRandomRadius=function(t){var e,r,s;return r=parseFloat(this.props.randomRadius),e=r>1?1:0>r?0:void 0,s=r?100*(1-r):50,this.h.rand(s,100)/100},e.prototype.then=function(t){return this.h.error('Burst\'s "then" method is under consideration, you can vote for it in github repo issues'),this},e}(n),e.exports=s},{"./h":4,"./shapes/bitsMap":11,"./swirl":21,"./transit":22,"./tween/tween":24}],3:[function(t,e,r){var s,i,n,o;n=t("./bezier-easing"),i=t("./path-easing"),s=function(){function t(){}return t.prototype.bezier=n,t.prototype.PathEasing=i,t.prototype.path=new i("creator").create,t.prototype.linear={none:function(t){return t}},t.prototype.ease={"in":n.apply(t,[.42,0,1,1]),out:n.apply(t,[0,0,.58,1]),inout:n.apply(t,[.42,0,.58,1])},t.prototype.quad={"in":function(t){return t*t},out:function(t){return t*(2-t)},inout:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},t.prototype.cubic={"in":function(t){return t*t*t},out:function(t){return--t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},t.prototype.quart={"in":function(t){return t*t*t*t},out:function(t){return 1- --t*t*t*t},inout:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},t.prototype.quint={"in":function(t){return t*t*t*t*t},out:function(t){return--t*t*t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},t.prototype.sin={"in":function(t){return 1-Math.cos(t*Math.PI/2)},out:function(t){return Math.sin(t*Math.PI/2)},inout:function(t){return.5*(1-Math.cos(Math.PI*t))}},t.prototype.expo={"in":function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},t.prototype.circ={"in":function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.prototype.back={"in":function(t){var e;return e=1.70158,t*t*((e+1)*t-e)},out:function(t){var e;return e=1.70158,--t*t*((e+1)*t+e)+1},inout:function(t){var e;return e=2.5949095,(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)}},t.prototype.elastic={"in":function(t){var e,r,s;return s=void 0,r=.4,0===t?0:1===t?1:(e=1,s=r/4,-(e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-s)*Math.PI/r)))},out:function(t){var e,r,s;return s=void 0,r=.4,0===t?0:1===t?1:(e=1,s=r/4,e*Math.pow(2,-10*t)*Math.sin(2*(t-s)*Math.PI/r)+1)},inout:function(t){var e,r,s;return s=void 0,r=.4,0===t?0:1===t?1:(e=1,s=r/4,(t*=2)<1?-.5*e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-s)*Math.PI/r):e*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-s)*Math.PI/r)*.5+1)}},t.prototype.bounce={"in":function(t){return 1-o.bounce.out(1-t)},out:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return.5>t?.5*o.bounce["in"](2*t):.5*o.bounce.out(2*t-1)+.5}},t}(),o=new s,e.exports=o},{"./bezier-easing":1,"./path-easing":7}],4:[function(t,e,r){var s,i;s=function(){function t(){this.vars()}return t.prototype.NS="http://www.w3.org/2000/svg",t.prototype.logBadgeCss="background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;",t.prototype.shortColors={transparent:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},t.prototype.chainOptionMap={duration:1,delay:1,repeat:1,easing:1,yoyo:1,onStart:1,onComplete:1,onCompleteChain:1,onUpdate:1,points:1},t.prototype.callbacksMap={onStart:1,onComplete:1,onCompleteChain:1,onUpdate:1},t.prototype.tweenOptionMap={duration:1,delay:1,repeat:1,easing:1,yoyo:1},t.prototype.posPropsMap={x:1,y:1,shiftX:1,shiftY:1,burstX:1,burstY:1,burstShiftX:1,burstShiftY:1},t.prototype.strokeDashPropsMap={strokeDasharray:1,strokeDashoffset:1},t.prototype.RAD_TO_DEG=180/Math.PI,t.prototype.vars=function(){var t;return this.prefix=this.getPrefix(),this.getRemBase(),this.isFF="moz"===this.prefix.lowercase,this.isIE="ms"===this.prefix.lowercase,t=navigator.userAgent,this.isOldOpera=t.match(/presto/gim),this.isSafari=t.indexOf("Safari")>-1,this.isChrome=t.indexOf("Chrome")>-1,this.isOpera=t.toLowerCase().indexOf("op")>-1,this.isChrome&&this.isSafari&&(this.isSafari=!1),t.match(/PhantomJS/gim)&&(this.isSafari=!1),this.isChrome&&this.isOpera&&(this.isChrome=!1),this.uniqIDs=-1,this.div=document.createElement("div"),document.body.appendChild(this.div)},t.prototype.cloneObj=function(t,e){var r,s,i,n;for(i=Object.keys(t),n={},r=i.length;r--;)s=i[r],null!=e?e[s]||(n[s]=t[s]):n[s]=t[s];return n},t.prototype.extend=function(t,e){var r,s;for(r in e)s=e[r],null==t[r]&&(t[r]=e[r]);return t},t.prototype.getRemBase=function(){var t,e;return t=document.querySelector("html"),e=getComputedStyle(t),this.remBase=parseFloat(e.fontSize)},t.prototype.clamp=function(t,e,r){return e>t?e:t>r?r:t},t.prototype.setPrefixedStyle=function(t,e,r){var s;return s=""+this.prefix.css+e,t.style[e]=r,t.style[s]=r},t.prototype.prepareForLog=function(t){return t=Array.prototype.slice.apply(t),t.unshift("::"),t.unshift(this.logBadgeCss),t.unshift("%cmo·js%c"),t},t.prototype.log=function(){return mojs.isDebug!==!1?console.log.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.warn=function(){return mojs.isDebug!==!1?console.warn.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.error=function(){return mojs.isDebug!==!1?console.error.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.parseUnit=function(t){var e,r,s,i,n,o;return"number"==typeof t?n={unit:"px",isStrict:!1,value:t,string:t+"px"}:"string"==typeof t?(i=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin/gim,o=null!=(s=t.match(i))?s[0]:void 0,r=!0,o||(o="px",r=!1),e=parseFloat(t),n={unit:o,isStrict:r,value:e,string:""+e+o}):t},t.prototype.bind=function(t,e){var r,s;return s=function(){var s,i;return s=Array.prototype.slice.call(arguments),i=r.concat(s),t.apply(e,i)},r=Array.prototype.slice.call(arguments,2),s},t.prototype.getRadialPoint=function(t){var e,r,s,i;return null==t&&(t={}),null!=t.radius&&null!=t.angle&&null!=t.center?(r=(t.angle-90)*(Math.PI/180),s=null!=t.radiusX?t.radiusX:t.radius,i=null!=t.radiusY?t.radiusY:t.radius,e={x:t.center.x+Math.cos(r)*s,y:t.center.y+Math.sin(r)*i}):void 0},t.prototype.getPrefix=function(){var t,e,r,s;return r=window.getComputedStyle(document.documentElement,""),s=Array.prototype.slice.call(r).join("").match(/-(moz|webkit|ms)-/),e=(s||""===r.OLink&&["","o"])[1],t="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],{dom:t,lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}},t.prototype.strToArr=function(t){var e;return e=[],"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){return function(r){return e.push(t.parseUnit(t.parseIfRand(r)))}}(this)),e):(e.push(this.parseUnit(t)),e)},t.prototype.calcArrDelta=function(t,e){var r,s,i,n,o;for(r=[],s=i=0,n=t.length;n>i;s=++i)o=t[s],r[s]=this.parseUnit(""+(e[s].value-t[s].value)+e[s].unit);return r},t.prototype.isArray=function(t){return t instanceof Array},t.prototype.normDashArrays=function(t,e){var r,s,i,n,o,p,a,h,u,l;if(r=t.length,s=e.length,r>s)for(a=r-s,l=e.length,n=o=0,h=a;h>=0?h>o:o>h;n=h>=0?++o:--o)i=n+l,e.push(this.parseUnit("0"+t[i].unit));else if(s>r)for(a=s-r,l=t.length,n=p=0,u=a;u>=0?u>p:p>u;n=u>=0?++p:--p)i=n+l,t.push(this.parseUnit("0"+e[i].unit));return[t,e]},t.prototype.makeColorObj=function(t){var e,r,s,i,n,o,p,a,h,u,l;return"#"===t[0]&&(h=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t),s={},h&&(o=2===h[1].length?h[1]:h[1]+h[1],i=2===h[2].length?h[2]:h[2]+h[2],r=2===h[3].length?h[3]:h[3]+h[3],s={r:parseInt(o,16),g:parseInt(i,16),b:parseInt(r,16),a:1})),"#"!==t[0]&&(n="r"===t[0]&&"g"===t[1]&&"b"===t[2],n&&(u=t),n||(u=this.shortColors[t]?this.shortColors[t]:(this.div.style.color=t,this.isFF||this.isIE||this.isOldOpera?(l=this.computedStyle(this.div),this.computedStyle(this.div).color):this.div.style.color)),p="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",a="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",h=new RegExp(p+a,"gi").exec(u),s={},e=parseFloat(h[4]||1),h&&(s={r:parseInt(h[1],10),g:parseInt(h[2],10),b:parseInt(h[3],10),a:null==e||isNaN(e)?1:e})),s},t.prototype.computedStyle=function(t){return getComputedStyle(t)},t.prototype.capitalize=function(t){if("string"!=typeof t)throw Error("String expected - nothing to capitalize");return t.charAt(0).toUpperCase()+t.substring(1)},t.prototype.parseRand=function(t){var e,r,s;return r=t.split(/rand\(|\,|\)/),s=this.parseUnit(r[2]),e=this.rand(parseFloat(r[1]),parseFloat(r[2])),s.unit&&r[2].match(s.unit)?e+s.unit:e},t.prototype.parseStagger=function(t,e){var r,s,i,n,o,p;return p=t.split(/stagger\(|\)$/)[1].toLowerCase(),i=p.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim),p=i.length>3?(r=this.parseUnit(this.parseIfRand(i[1])),i[3]):(r=this.parseUnit(0),i[1]),p=this.parseIfRand(p),o=this.parseUnit(p),s=e*o.value+r.value,n=r.isStrict?r.unit:o.isStrict?o.unit:"",n?""+s+n:s},t.prototype.parseIfRand=function(t){return"string"==typeof t&&t.match(/rand\(/)?this.parseRand(t):t},t.prototype.parseDelta=function(t,e){var r,s,i,n,o,p,a,h,u,l;if(h=Object.keys(e)[0],s=e[h],r={start:h},isNaN(parseFloat(h))&&!h.match(/rand\(/)){if("strokeLinecap"===t)return this.warn("Sorry, stroke-linecap property is not animatable yet, using the start("+h+") value instead",e),r;l=this.makeColorObj(h),n=this.makeColorObj(s),r={start:l,end:n,type:"color",delta:{r:n.r-l.r,g:n.g-l.g,b:n.b-l.b,a:n.a-l.a}}}else if("strokeDasharray"===t||"strokeDashoffset"===t){for(u=this.strToArr(h),i=this.strToArr(s),this.normDashArrays(u,i),o=p=0,a=u.length;a>p;o=++p)h=u[o],s=i[o],this.mergeUnits(h,s,t);r={start:u,end:i,delta:this.calcArrDelta(u,i),type:"array"}}else this.chainOptionMap[t]||(this.posPropsMap[t]?(s=this.parseUnit(this.parseIfRand(s)),h=this.parseUnit(this.parseIfRand(h)),this.mergeUnits(h,s,t),r={start:h,end:s,delta:s.value-h.value,type:"unit"}):(s=parseFloat(this.parseIfRand(s)),h=parseFloat(this.parseIfRand(h)),r={start:h,end:s,delta:s-h,type:"number"}));return r},t.prototype.mergeUnits=function(t,e,r){return!e.isStrict&&t.isStrict?(e.unit=t.unit,e.string=""+e.value+e.unit):e.isStrict&&!t.isStrict?(t.unit=e.unit,t.string=""+t.value+t.unit):e.isStrict&&t.isStrict&&e.unit!==t.unit?(t.unit=e.unit,t.string=""+t.value+t.unit,this.warn('Two different units were specified on "'+r+'" delta property, mo · js will fallback to end "'+e.unit+'" unit ')):void 0},t.prototype.rand=function(t,e){return Math.random()*(e-t)+t},t.prototype.isDOM=function(t){var e;return null==t?!1:(e="number"==typeof t.nodeType&&"string"==typeof t.nodeName,"object"==typeof t&&e)},t.prototype.getChildElements=function(t){var e,r,s;for(e=t.childNodes,r=[],s=e.length;s--;)1===e[s].nodeType&&r.unshift(e[s]);return r},t.prototype.delta=function(t,e){var r,s,i,n,o;return n=typeof t,o=typeof e,r="string"===n||"number"===n&&!isNaN(t),s="string"===o||"number"===o&&!isNaN(e),r&&s?(i={},i[t]=e,i):void this.error("delta method expects Strings or Numbers at input but got - "+t+", "+e)},t.prototype.getUniqID=function(){return++this.uniqIDs},t.prototype.parsePath=function(t){var e;return"string"==typeof t?"m"===t.charAt(0).toLowerCase()?(e=document.createElementNS(this.NS,"path"),e.setAttributeNS(null,"d",t),e):document.querySelector(t):t.style?t:void 0},t.prototype.closeEnough=function(t,e,r){return Math.abs(t-e)<r},t}(),i=new s,e.exports=i},{}],5:[function(e,r,s){var i;return i={revision:"0.121.3",isDebug:!0,helpers:e("./h"),Bit:e("./shapes/bit"),bitsMap:e("./shapes/bitsMap"),Circle:e("./shapes/circle"),Cross:e("./shapes/cross"),Line:e("./shapes/line"),Rect:e("./shapes/rect"),Polygon:e("./shapes/polygon"),Equal:e("./shapes/equal"),Zigzag:e("./shapes/zigzag"),Burst:e("./burst"),Transit:e("./transit"),Swirl:e("./swirl"),Stagger:e("./stagger"),Spriter:e("./spriter"),MotionPath:e("./motion-path"),Timeline:e("./tween/timeline"),Tween:e("./tween/tween"),tweener:e("./tween/tweener"),easing:e("./easing")},i.h=i.helpers,i.delta=i.h.delta,"function"==typeof t&&t.amd&&t("mojs",[],function(){return i}),"object"==typeof r&&"object"==typeof r.exports&&(r.exports=i),"undefined"!=typeof window&&null!==window?window.mojs=i:void 0},{"./burst":2,"./easing":3,"./h":4,"./motion-path":6,"./shapes/bit":10,"./shapes/bitsMap":11,"./shapes/circle":12,"./shapes/cross":13,"./shapes/equal":14,"./shapes/line":15,"./shapes/polygon":16,"./shapes/rect":17,"./shapes/zigzag":18,"./spriter":19,"./stagger":20,"./swirl":21,"./transit":22,"./tween/timeline":23,"./tween/tween":24,"./tween/tweener":25}],6:[function(t,e,r){var s,i,n,o,p,a,h=function(t,e){return function(){return t.apply(e,arguments)}};p=t("./h"),o=t("./easing"),a=t("./vendor/resize"),i=t("./tween/timeline"),n=t("./tween/tween"),s=function(){function t(t){this.o=null!=t?t:{},this.calcHeight=h(this.calcHeight,this),this.vars()||this.createTween()}return t.prototype.defaults={path:null,curvature:{x:"75%",y:"50%"},delay:0,duration:1e3,easing:null,repeat:0,yoyo:!1,offsetX:0,offsetY:0,angleOffset:null,pathStart:0,pathEnd:1,motionBlur:0,transformOrigin:null,isAngle:!1,isReverse:!1,isRunLess:!1,isPresetPosition:!0,onStart:null,onComplete:null,onUpdate:null,onPosit:null},t.prototype.vars=function(){return this.getScaler=p.bind(this.getScaler,this),this.resize=a,this.props=p.cloneObj(this.defaults),this.extendOptions(this.o),this.isMotionBlurReset=p.isSafari||p.isIE,this.isMotionBlurReset&&(this.props.motionBlur=0),this.history=[p.cloneObj(this.props)],this.postVars()},t.prototype.curveToPath=function(t){var e,r,s,i,n,o,a,h,u,l,c,d,f;return l=document.createElementNS(p.NS,"path"),f=t.start,u={x:f.x+t.shift.x,y:f.x+t.shift.y},r=t.curvature,a=t.shift.x,h=t.shift.y,d=Math.sqrt(a*a+h*h),c=d/100,e=Math.atan(h/a)*(180/Math.PI)+90,t.shift.x<0&&(e+=180),s=p.parseUnit(r.x),s="%"===s.unit?s.value*c:s.value,o=p.getRadialPoint({center:{x:f.x,y:f.y},radius:s,angle:e}),i=p.parseUnit(r.y),i="%"===i.unit?i.value*c:i.value,n=p.getRadialPoint({center:{x:o.x,y:o.y},radius:i,angle:e+90}),l.setAttribute("d","M"+f.x+","+f.y+" Q"+n.x+","+n.y+" "+u.x+","+u.y),l},t.prototype.postVars=function(){return this.props.pathStart=p.clamp(this.props.pathStart,0,1),this.props.pathEnd=p.clamp(this.props.pathEnd,this.props.pathStart,1),this.angle=0,this.speedX=0,this.speedY=0,this.blurX=0,this.blurY=0,this.prevCoords={},this.blurAmount=20,this.props.motionBlur=p.clamp(this.props.motionBlur,0,1),this.onUpdate=this.props.onUpdate,this.el=this.parseEl(this.props.el),this.props.motionBlur>0&&this.createFilter(),this.path=this.getPath(),this.path.getAttribute("d")?(this.len=this.path.getTotalLength(),this.slicedLen=this.len*(this.props.pathEnd-this.props.pathStart),this.startLen=this.props.pathStart*this.len,this.fill=this.props.fill,null!=this.fill&&(this.container=this.parseEl(this.props.fill.container),this.fillRule=this.props.fill.fillRule||"all",this.getScaler(),null!=this.container)?(this.removeEvent(this.container,"onresize",this.getScaler),this.addEvent(this.container,"onresize",this.getScaler)):void 0):(p.error("Path has no coordinates to work with, aborting"),!0)},t.prototype.addEvent=function(t,e,r){return t.addEventListener(e,r,!1)},t.prototype.removeEvent=function(t,e,r){return t.removeEventListener(e,r,!1)},t.prototype.createFilter=function(){var t,e;return t=document.createElement("div"),this.filterID="filter-"+p.getUniqID(),t.innerHTML='<svg id="svg-'+this.filterID+'"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="'+this.filterID+'" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>',e=t.querySelector("#svg-"+this.filterID),this.filter=e.querySelector("#blur"),this.filterOffset=e.querySelector("#blur-offset"),document.body.insertBefore(e,document.body.firstChild),this.el.style.filter="url(#"+this.filterID+")",this.el.style[p.prefix.css+"filter"]="url(#"+this.filterID+")"},t.prototype.parseEl=function(t){return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:null!=t.setProp?(this.isModule=!0,t):void 0},t.prototype.getPath=function(){var t;return t=p.parsePath(this.props.path),t?t:this.props.path.x||this.props.path.y?this.curveToPath({start:{x:0,y:0},shift:{x:this.props.path.x||0,y:this.props.path.y||0},curvature:{x:this.props.curvature.x||this.defaults.curvature.x,y:this.props.curvature.y||this.defaults.curvature.y}}):void 0},t.prototype.getScaler=function(){var t,e,r;switch(this.cSize={width:this.container.offsetWidth||0,height:this.container.offsetHeight||0},r=this.path.getPointAtLength(0),t=this.path.getPointAtLength(this.len),e={},this.scaler={},e.width=t.x>=r.x?t.x-r.x:r.x-t.x,e.height=t.y>=r.y?t.y-r.y:r.y-t.y,this.fillRule){case"all":return this.calcWidth(e),this.calcHeight(e);case"width":return this.calcWidth(e),this.scaler.y=this.scaler.x;case"height":return this.calcHeight(e),this.scaler.x=this.scaler.y}},t.prototype.calcWidth=function(t){return this.scaler.x=this.cSize.width/t.width,!isFinite(this.scaler.x)&&(this.scaler.x=1)},t.prototype.calcHeight=function(t){return this.scaler.y=this.cSize.height/t.height,!isFinite(this.scaler.y)&&(this.scaler.y=1)},t.prototype.run=function(t){var e,r,s;if(t){e=this.history[0];for(r in t)s=t[r],p.callbacksMap[r]||p.tweenOptionMap[r]?(p.warn('the property "'+r+'" property can not be overridden on run yet'),delete t[r]):this.history[0][r]=s;this.tuneOptions(t)}return this.startTween()},t.prototype.createTween=function(){return this.timeline=new i({duration:this.props.duration,delay:this.props.delay,yoyo:this.props.yoyo,repeat:this.props.repeat,easing:this.props.easing,onStart:function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onComplete:function(t){return function(){var e;return t.props.motionBlur&&t.setBlur({blur:{x:0,y:0},offset:{x:0,y:0}}),null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onFirstUpdateBackward:function(t){return function(){return t.history.length>1&&t.tuneOptions(t.history[0])}}(this)}),this.tween=new n,this.tween.add(this.timeline),!this.props.isRunLess&&this.startTween(),this.props.isPresetPosition&&this.setProgress(0,!0)},t.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.tween)?e.start():void 0}}(this),1)},t.prototype.setProgress=function(t,e){var r,s,i,n,o,a,h,u,l,c,d;return a=this.props,i=this.startLen+(a.isReverse?(1-t)*this.slicedLen:t*this.slicedLen),n=this.path.getPointAtLength(i),s="function"==typeof a.transformOrigin,a.isAngle||null!=a.angleOffset||s?(o=this.path.getPointAtLength(i-1),l=n.y-o.y,c=n.x-o.x,r=Math.atan(l/c),!isFinite(r)&&(r=0),this.angle=r*p.RAD_TO_DEG,"function"!=typeof a.angleOffset?this.angle+=a.angleOffset||0:this.angle=a.angleOffset.call(this,this.angle,t)):this.angle=0,u=n.x+this.props.offsetX,d=n.y+this.props.offsetY,this.props.motionBlur&&this.makeMotionBlur(u,d),this.scaler&&(u*=this.scaler.x,d*=this.scaler.y),this.isModule?this.setModulePosition(u,d):this.setElPosition(u,d,t),this.props.transformOrigin&&(h=s?this.props.transformOrigin(this.angle,t):this.props.transformOrigin,this.el.style[p.prefix.css+"transform-origin"]=h,this.el.style["transform-origin"]=h),!e&&("function"==typeof this.onUpdate?this.onUpdate(t):void 0)},t.prototype.setElPosition=function(t,e,r){var s,i;return i=null==this.props.onPosit?(s=0!==this.angle?"rotate("+this.angle+"deg)":"","translate("+t+"px,"+e+"px) "+s):this.props.onPosit(r,t,e,this.angle),this.el.style[p.prefix.css+"transform"]=i,this.el.style.transform=i},t.prototype.setModulePosition=function(t,e){return this.el.setProp({shiftX:t+"px",shiftY:e+"px",angle:this.angle}),this.el.draw()},t.prototype.makeMotionBlur=function(t,e){var r,s,i,n,o,a,h;return h=0,o=1,a=1,null==this.prevCoords.x||null==this.prevCoords.y?(this.speedX=0,this.speedY=0):(i=t-this.prevCoords.x,n=e-this.prevCoords.y,i>0&&(o=-1),0>o&&(a=-1),this.speedX=Math.abs(i),this.speedY=Math.abs(n),h=Math.atan(n/i)*(180/Math.PI)+90),r=h-this.angle,s=this.angToCoords(r),this.blurX=p.clamp(this.speedX/16*this.props.motionBlur,0,1),this.blurY=p.clamp(this.speedY/16*this.props.motionBlur,0,1),this.setBlur({blur:{x:3*this.blurX*this.blurAmount*Math.abs(s.x),y:3*this.blurY*this.blurAmount*Math.abs(s.y)},offset:{x:3*o*this.blurX*s.x*this.blurAmount,y:3*a*this.blurY*s.y*this.blurAmount}}),this.prevCoords.x=t,this.prevCoords.y=e},t.prototype.setBlur=function(t){return this.isMotionBlurReset?void 0:(this.filter.setAttribute("stdDeviation",t.blur.x+","+t.blur.y),this.filterOffset.setAttribute("dx",t.offset.x),this.filterOffset.setAttribute("dy",t.offset.y))},t.prototype.extendDefaults=function(t){var e,r,s;r=[];for(e in t)s=t[e],r.push(this[e]=s);return r},t.prototype.extendOptions=function(t){var e,r,s;r=[];for(e in t)s=t[e],r.push(this.props[e]=s);return r},t.prototype.then=function(t){var e,r,s,n,o;n=this.history[this.history.length-1],s={};for(r in n)o=n[r],!p.callbacksMap[r]&&!p.tweenOptionMap[r]||"duration"===r?null==t[r]&&(t[r]=o):null==t[r]&&(t[r]=void 0),p.tweenOptionMap[r]&&(s[r]="duration"!==r?t[r]:null!=t[r]?t[r]:n[r]);return this.history.push(t),e=this,s.onUpdate=function(t){return function(e){return t.setProgress(e)}}(this),s.onStart=function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),s.onComplete=function(t){return function(){var e;return null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),s.onFirstUpdate=function(){return e.tuneOptions(e.history[this.index])},s.isChained=!t.delay,this.tween.append(new i(s)),this},t.prototype.tuneOptions=function(t){return this.extendOptions(t),this.postVars()},t.prototype.angToCoords=function(t){var e,r,s;return t%=360,e=(t-90)*Math.PI/180,r=Math.cos(e),s=Math.sin(e),r=0>r?Math.max(r,-.7):Math.min(r,.7),s=0>s?Math.max(s,-.7):Math.min(s,.7),{x:1.428571429*r,y:1.428571429*s}},t}(),e.exports=s},{"./easing":3,"./h":4,"./tween/timeline":23,"./tween/tween":24,"./vendor/resize":26}],7:[function(t,e,r){var s,i;i=t("./h"),s=function(){function t(t,e){var r;if(this.o=null!=e?e:{},"creator"!==t){if(this.path=i.parsePath(t),null==this.path)return i.error("Error while parsing the path");this.pathLength=null!=(r=this.path)?r.getTotalLength():void 0,this.sample=i.bind(this.sample,this),this._hardSample=i.bind(this._hardSample,this),this._vars(),this._preSample()}}return t.prototype._vars=function(){return this._precompute=i.clamp(this.o.precompute||2e3,100,1e4),this._step=1/this._precompute,this._rect=this.o.rect||100,this._approximateMax=this.o.approximateMax||5,this._eps=this.o.eps||.001,this._boundsPrevProgress=-1},t.prototype._preSample=function(){var t,e,r,s,i,n,o;for(this._samples=[],o=[],t=e=0,n=this._precompute;n>=0?n>=e:e>=n;t=n>=0?++e:--e)i=t*this._step,r=this.pathLength*i,s=this.path.getPointAtLength(r),o.push(this._samples[t]={point:s,length:r,progress:i});return o},t.prototype._findBounds=function(t,e){var r,s,i,n,o,p,a,h;for(a=null,r=null,n=t.length,(this._boundsPrevProgress>e||null==this._boundsStartIndex)&&(this._boundsStartIndex=0),s=i=o=this._boundsStartIndex,p=n;p>=o?p>=i:i>=p;s=p>=o?++i:--i){if(h=t[s],!(h.point.x/this._rect<e)){r=h;break}a=h,this._boundsPrevProgress<e&&(this._boundsStartIndex=s)}return this._boundsPrevProgress=e,
	null==a&&(a=t[0]),{start:a,end:r}},t.prototype.sample=function(t){var e;return t=i.clamp(t,0,1),e=this._findBounds(this._samples,t),i.closeEnough(t,e.start.point.x/this._rect,this._eps)?this._resolveY(e.start.point):i.closeEnough(t,e.end.point.x/this._rect,this._eps)?this._resolveY(e.end.point):this._findApproximate(t,e.start,e.end)},t.prototype._approximate=function(t,e,r){var s,i;return s=e.point.x-t.point.x,i=(r-t.point.x/100)/(s/100),t.length+i*(e.length-t.length)},t.prototype._findApproximate=function(t,e,r,s){var n,o,p,a,h;return null==s&&(s=this._approximateMax),n=this._approximate(e,r,t),a=this.path.getPointAtLength(n),h=a.x/100,i.closeEnough(t,h,this._eps)?this._resolveY(a):--s<1?this._resolveY(a):(p={point:a,length:n},o=h>t?[t,e,p,s]:[t,p,r,s],this._findApproximate.apply(this,o))},t.prototype._resolveY=function(t){return 1-t.y/this._rect},t.prototype.create=function(e,r){return new t(e,r).sample},t}(),e.exports=s},{"./h":4}],8:[function(t,e,r){!function(t){var e,r,s;return null==t.performance&&(t.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},null==t.performance.now?(e=(null!=(r=t.performance)&&null!=(s=r.timing)?s.navigationStart:void 0)?performance.timing.navigationStart:Date.now(),t.performance.now=function(){return Date.now()-e}):void 0}(window)},{}],9:[function(t,e,r){!function(){var t,e,r,s;for(e=0,s=0,r=["ms","moz","webkit","o"];s<r.length&&!window.requestAnimationFrame;)window.requestAnimationFrame=window[r[s]+"RequestAnimationFrame"],t=window[r[s]+"CancelRequestAnimationFrame"],window.cancelAnimationFrame=window[r[s]+"CancelAnimationFrame"]||t,++s;window.requestAnimationFrame||(window.requestAnimationFrame=function(t,r){var s,i,n;return s=(new Date).getTime(),n=Math.max(0,16-(s-e)),i=window.setTimeout(function(){t(s+n)},n),e=s+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},{}],10:[function(t,e,r){var s,i;i=t("../h"),s=function(){function t(t){this.o=null!=t?t:{},this.init()}return t.prototype.ns="http://www.w3.org/2000/svg",t.prototype.type="line",t.prototype.ratio=1,t.prototype.defaults={radius:50,radiusX:void 0,radiusY:void 0,points:3,x:0,y:0,angle:0,stroke:"hotpink","stroke-width":2,"stroke-opacity":1,fill:"transparent","fill-opacity":1,"stroke-dasharray":"","stroke-dashoffset":"","stroke-linecap":""},t.prototype.init=function(){return this.vars(),this.render(),this},t.prototype.vars=function(){return this.o.ctx&&"svg"===this.o.ctx.tagName?this.ctx=this.o.ctx:this.o.el||i.error("You should pass a real context(ctx) to the bit"),this.state={},this.drawMapLength=this.drawMap.length,this.extendDefaults(),this.calcTransform()},t.prototype.calcTransform=function(){var t;return t="rotate("+this.props.angle+", "+this.props.x+", "+this.props.y+")",this.props.transform=""+t},t.prototype.extendDefaults=function(){var t,e,r,s;null==this.props&&(this.props={}),e=this.defaults,r=[];for(t in e)s=e[t],r.push(this.props[t]=null!=this.o[t]?this.o[t]:s);return r},t.prototype.setAttr=function(t,e){var r,s,i,n,o,p;if("object"==typeof t){for(i=Object.keys(t),n=i.length,r=e||this.el,o=[];n--;)s=i[n],p=t[s],o.push(r.setAttribute(s,p));return o}return this.el.setAttribute(t,e)},t.prototype.setProp=function(t,e){var r,s,i;if("object"==typeof t){s=[];for(r in t)i=t[r],s.push(this.props[r]=i);return s}return this.props[t]=e},t.prototype.render=function(){return this.isRendered=!0,null!=this.o.el?(this.el=this.o.el,this.isForeign=!0):(this.el=document.createElementNS(this.ns,this.type||"line"),!this.o.isDrawLess&&this.draw(),this.ctx.appendChild(this.el))},t.prototype.drawMap=["stroke","stroke-width","stroke-opacity","stroke-dasharray","fill","stroke-dashoffset","stroke-linecap","fill-opacity","transform"],t.prototype.draw=function(){var t,e;for(this.props.length=this.getLength(),t=this.drawMapLength;t--;){switch(e=this.drawMap[t]){case"stroke-dasharray":case"stroke-dashoffset":this.castStrokeDash(e)}this.setAttrsIfChanged(e,this.props[e])}return this.state.radius=this.props.radius},t.prototype.castStrokeDash=function(t){var e,r,s,n,o,p,a;if(i.isArray(this.props[t])){for(a="",p=this.props[t],s=n=0,o=p.length;o>n;s=++n)r=p[s],e="%"===r.unit?this.castPercent(r.value):r.value,a+=e+" ";return this.props[t]="0 "===a?a="":a,this.props[t]=a}return"object"==typeof this.props[t]?(a="%"===this.props[t].unit?this.castPercent(this.props[t].value):this.props[t].value,this.props[t]=0===a?a="":a):void 0},t.prototype.castPercent=function(t){return t*(this.props.length/100)},t.prototype.setAttrsIfChanged=function(t,e){var r,s,i,n;if("object"==typeof t){for(s=Object.keys(t),i=s.length,n=[];i--;)r=s[i],e=t[r],n.push(this.setAttrIfChanged(r,e));return n}return null==e&&(e=this.props[t]),this.setAttrIfChanged(t,e)},t.prototype.setAttrIfChanged=function(t,e){return this.isChanged(t,e)?(this.el.setAttribute(t,e),this.state[t]=e):void 0},t.prototype.isChanged=function(t,e){return null==e&&(e=this.props[t]),this.state[t]!==e},t.prototype.getLength=function(){var t;return null!=(null!=(t=this.el)?t.getTotalLength:void 0)&&this.el.getAttribute("d")?this.el.getTotalLength():2*(null!=this.props.radiusX?this.props.radiusX:this.props.radius)},t}(),e.exports=s},{"../h":4}],11:[function(t,e,r){var s,i,n,o,p,a,h,u,l,c;s=t("./bit"),n=t("./circle"),a=t("./line"),l=t("./zigzag"),u=t("./rect"),h=t("./polygon"),o=t("./cross"),p=t("./equal"),c=t("../h"),i=function(){function t(){}return t.prototype.h=c,t.prototype.map={bit:s,circle:n,line:a,zigzag:l,rect:u,polygon:h,cross:o,equal:p},t.prototype.getBit=function(t){return this.map[t]||this.h.error('no "'+t+'" shape available yet, please choose from this list:',this.map)},t}(),e.exports=new i},{"../h":4,"./bit":10,"./circle":12,"./cross":13,"./equal":14,"./line":15,"./polygon":16,"./rect":17,"./zigzag":18}],12:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="ellipse",e.prototype.draw=function(){var t,r;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,r=null!=this.props.radiusY?this.props.radiusY:this.props.radius,this.setAttrsIfChanged({rx:t,ry:r,cx:this.props.x,cy:this.props.y}),e.__super__.draw.apply(this,arguments)},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*Math.PI*Math.sqrt((Math.pow(t,2)+Math.pow(e,2))/2)},e}(s),e.exports=i},{"./bit":10}],13:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.draw=function(){var t,r,s,i,n,o,p,a,h;return e.__super__.draw.apply(this,arguments),i=null!=this.props.radiusX?this.props.radiusX:this.props.radius,n=null!=this.props.radiusY?this.props.radiusY:this.props.radius,o=this.props.x-i,p=this.props.x+i,r="M"+o+","+this.props.y+" L"+p+","+this.props.y,a=this.props.y-n,h=this.props.y+n,s="M"+this.props.x+","+a+" L"+this.props.x+","+h,t=r+" "+s,this.setAttr({d:t})},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*(t+e)},e}(s),e.exports=i},{"./bit":10}],14:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r,s,i,n,o,p,a,h,u,l;if(e.__super__.draw.apply(this,arguments),this.props.points){for(i=null!=this.props.radiusX?this.props.radiusX:this.props.radius,n=null!=this.props.radiusY?this.props.radiusY:this.props.radius,p=this.props.x-i,a=this.props.x+i,t="",l=2*n/(this.props.points-1),u=this.props.y-n,r=s=0,o=this.props.points;o>=0?o>s:s>o;r=o>=0?++s:--s)h=""+(r*l+u),t+="M"+p+", "+h+" L"+a+", "+h+" ";return this.setAttr({d:t})}},e.prototype.getLength=function(){return 2*(null!=this.props.radiusX?this.props.radiusX:this.props.radius)},e}(s),e.exports=i},{"./bit":10}],15:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.draw=function(){var t;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,this.setAttrsIfChanged({x1:this.props.x-t,x2:this.props.x+t,y1:this.props.y,y2:this.props.y}),e.__super__.draw.apply(this,arguments)},e}(s),e.exports=i},{"./bit":10}],16:[function(t,e,r){var s,i,n,o=function(t,e){function r(){this.constructor=t}for(var s in e)p.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=t("./bit"),n=t("../h"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype.type="path",e.prototype.draw=function(){return this.drawShape(),e.__super__.draw.apply(this,arguments)},e.prototype.drawShape=function(){var t,e,r,s,i,o,p,a,h,u;for(u=360/this.props.points,this.radialPoints=[],r=s=0,a=this.props.points;a>=0?a>s:s>a;r=a>=0?++s:--s)this.radialPoints.push(n.getRadialPoint({radius:this.props.radius,radiusX:this.props.radiusX,radiusY:this.props.radiusY,angle:r*u,center:{x:this.props.x,y:this.props.y}}));for(e="",h=this.radialPoints,r=i=0,o=h.length;o>i;r=++i)p=h[r],t=0===r?"M":"L",e+=""+t+p.x.toFixed(4)+","+p.y.toFixed(4)+" ";return this.setAttr({d:e+="z"})},e.prototype.getLength=function(){return this.el.getTotalLength()},e}(s),e.exports=i},{"../h":4,"./bit":10}],17:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="rect",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r;return e.__super__.draw.apply(this,arguments),t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,r=null!=this.props.radiusY?this.props.radiusY:this.props.radius,this.setAttrsIfChanged({width:2*t,height:2*r,x:this.props.x-t,y:this.props.y-r})},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*t+2*e},e}(s),e.exports=i},{"./bit":10}],18:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./bit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r,s,i,n,o,p,a,h,u,l,c,d,f,y,g;if(this.props.points){for(h=null!=this.props.radiusX?this.props.radiusX:this.props.radius,u=null!=this.props.radiusY?this.props.radiusY:this.props.radius,a="",c=2*h/this.props.points,d=2*u/this.props.points,f=this.props["stroke-width"],y=this.props.x-h,g=this.props.y-u,r=p=l=this.props.points;0>=l?0>p:p>0;r=0>=l?++p:--p)s=y+r*c+f,n=g+r*d+f,i=y+(r-1)*c+f,o=g+(r-1)*d+f,t=r===this.props.points?"M":"L",a+=""+t+s+","+n+" l0, -"+d+" l-"+c+", 0";return this.setAttr({d:a}),e.__super__.draw.apply(this,arguments)}},e}(s),e.exports=i},{"./bit":10}],19:[function(t,e,r){var s,i,n,o;o=t("./h"),i=t("./tween/timeline"),n=t("./tween/tween"),s=function(){function t(t){return this.o=null!=t?t:{},null==this.o.el?o.error('No "el" option specified, aborting'):(this._vars(),this._extendDefaults(),this._parseFrames(),this._frames.length<=2&&o.warn("Spriter: only "+this._frames.length+" frames found"),this._frames.length<1&&o.error("Spriter: there is no frames to animate, aborting"),void this._createTween())}return t.prototype._defaults={duration:500,delay:0,easing:"linear.none",repeat:0,yoyo:!1,isRunLess:!1,isShowEnd:!1,onStart:null,onUpdate:null,onComplete:null},t.prototype._vars=function(){return this._props=o.cloneObj(this.o),this.el=this.o.el,this._frames=[]},t.prototype.run=function(t){return this._tween.start()},t.prototype._extendDefaults=function(){return o.extend(this._props,this._defaults)},t.prototype._parseFrames=function(){var t,e,r,s,i;for(this._frames=Array.prototype.slice.call(this.el.children,0),i=this._frames,e=r=0,s=i.length;s>r;e=++r)t=i[e],t.style.opacity=0;return this._frameStep=1/this._frames.length},t.prototype._createTween=function(){return this._timeline=new i({duration:this._props.duration,delay:this._props.delay,yoyo:this._props.yoyo,repeat:this._props.repeat,easing:this._props.easing,onStart:function(t){return function(){var e;return"function"==typeof(e=t._props).onStart?e.onStart():void 0}}(this),onComplete:function(t){return function(){var e;return"function"==typeof(e=t._props).onComplete?e.onComplete():void 0}}(this),onUpdate:function(t){return function(e){return t._setProgress(e)}}(this)}),this._tween=new n,this._tween.add(this._timeline),!this._props.isRunLess&&this._startTween()},t.prototype._startTween=function(){return setTimeout(function(t){return function(){return t._tween.start()}}(this),1)},t.prototype._setProgress=function(t){var e,r,s,i,n;return s=Math.floor(t/this._frameStep),this._prevFrame!==this._frames[s]&&(null!=(i=this._prevFrame)&&(i.style.opacity=0),r=1===t&&this._props.isShowEnd?s-1:s,null!=(n=this._frames[r])&&(n.style.opacity=1),this._prevFrame=this._frames[s]),"function"==typeof(e=this._props).onUpdate?e.onUpdate(t):void 0},t}(),e.exports=s},{"./h":4,"./tween/timeline":23,"./tween/tween":24}],20:[function(t,e,r){var s,i,n,o,p,a=function(t,e){function r(){this.constructor=t}for(var s in e)h.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},h={}.hasOwnProperty;p=t("./h"),i=t("./tween/timeline"),o=t("./tween/tween"),n=t("./transit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.isSkipDelta=!0,e.prototype.ownDefaults={delay:"stagger(100)",els:null,fill:"transparent",stroke:["yellow","cyan","deeppink"],strokeDasharray:"100%",strokeDashoffset:{"100%":"0%"},isShowInit:!1,isShowEnd:!1,radius:0,type:"line"},e.prototype.vars=function(){return p.extend(this.ownDefaults,this.defaults),this.defaults=this.ownDefaults,e.__super__.vars.apply(this,arguments),this.parseEls()},e.prototype.extendDefaults=function(t){var e,r,s,i,n;this.props={},this.deltas={},e=t||this.o,s=this.defaults,i=[];for(r in s)n=s[r],i.push(this.props[r]=null!=e[r]?e[r]:this.defaults[r]);return i},e.prototype.parseEls=function(){var t;return this.props.els+""=="[object NodeList]"?this.props.els=Array.prototype.slice.call(this.props.els,0):"string"==typeof this.props.els?(t=document.querySelector(this.props.els),this.props.els=p.getChildElements(t)):p.isDOM(this.props.els)?this.props.els=p.getChildElements(this.props.els):void 0},e.prototype.createBit=function(){var t,e,r,s,i,o;for(this.transits=[],r=this.props.els.length,o=[],t=e=0,i=r;i>=0?i>e:e>i;t=i>=0?++e:--e)s=this.getOption(t),s.index=t,s.isRunLess=!0,o.push(this.transits.push(new n(s)));return o},e.prototype.getOption=function(t){var e,r,s,i;r={},s=this.props;for(e in s)i=s[e],r[e]=this.getPropByMod(e,t);return r.bit=this.getPropByMod("els",t),r},e.prototype.getPropByMod=function(t,e){var r;return r=this.props[t],p.isArray(r)?r[e%r.length]:r},e.prototype.render=function(){return this.createBit(),this.setProgress(0,!0),this.createTween(),this},e.prototype.isDelta=function(){return!1},e.prototype.createTween=function(){var t;for(this.tween=new o,t=-1;t++<this.transits.length-1;)this.tween.add(this.transits[t].tween);return!this.o.isRunLess&&this.startTween()},e.prototype.draw=function(){return this.drawEl()},e}(n),e.exports=s},{"./h":4,"./transit":22,"./tween/timeline":23,"./tween/tween":24}],21:[function(t,e,r){var s,i,n=function(t,e){function r(){this.constructor=t}for(var s in e)o.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./transit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.skipPropsDelta={x:1,y:1},e.prototype.vars=function(){return e.__super__.vars.apply(this,arguments),!this.o.isSwirlLess&&this.generateSwirl()},e.prototype.extendDefaults=function(){var t,r,s,i;return e.__super__.extendDefaults.apply(this,arguments),s=this.getPosValue("x"),i=this.getPosValue("y"),t=90+Math.atan(i.delta/s.delta||0)*(180/Math.PI),s.delta<0&&(t+=180),this.positionDelta={radius:Math.sqrt(s.delta*s.delta+i.delta*i.delta),angle:t,x:s,y:i},null==(r=this.o).radiusScale&&(r.radiusScale=1),this.props.angleShift=this.h.parseIfRand(this.o.angleShift||0),this.props.radiusScale=this.h.parseIfRand(this.o.radiusScale)},e.prototype.getPosValue=function(t){var e,r;return e=this.o[t],e&&"object"==typeof e?(r=this.h.parseDelta(t,e),{start:r.start.value,end:r.end.value,delta:r.delta,units:r.end.unit}):(r=parseFloat(e||this.defaults[t]),{start:r,end:r,delta:0,units:"px"})},e.prototype.setProgress=function(t){var r,s,i,n;return r=this.positionDelta.angle,this.o.isSwirl&&(r+=this.getSwirl(t)),s=this.h.getRadialPoint({angle:r,radius:this.positionDelta.radius*t*this.props.radiusScale,center:{x:this.positionDelta.x.start,y:this.positionDelta.y.start}}),i=s.x.toFixed(4),n=s.y.toFixed(4),this.props.x=this.o.ctx?i:i+this.positionDelta.x.units,this.props.y=this.o.ctx?n:n+this.positionDelta.y.units,e.__super__.setProgress.apply(this,arguments)},e.prototype.generateSwirl=function(){var t,e;return this.props.signRand=Math.round(this.h.rand(0,1))?-1:1,null==(t=this.o).swirlSize&&(t.swirlSize=10),null==(e=this.o).swirlFrequency&&(e.swirlFrequency=3),this.props.swirlSize=this.h.parseIfRand(this.o.swirlSize),this.props.swirlFrequency=this.h.parseIfRand(this.o.swirlFrequency)},e.prototype.getSwirl=function(t){return this.props.signRand*this.props.swirlSize*Math.sin(this.props.swirlFrequency*t)},e}(i),e.exports=s},{"./transit":22}],22:[function(t,e,r){var s,i,n,o,p,a=function(t,e){function r(){this.constructor=t}for(var s in e)h.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},h={}.hasOwnProperty;p=t("./h"),o=t("./shapes/bitsMap"),s=t("./tween/timeline"),n=t("./tween/tween"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.progress=0,e.prototype.defaults={strokeWidth:2,strokeOpacity:1,strokeDasharray:0,strokeDashoffset:0,stroke:"transparent",fill:"deeppink",fillOpacity:"transparent",strokeLinecap:"",points:3,x:0,y:0,shiftX:0,shiftY:0,opacity:1,radius:{0:50},radiusX:void 0,radiusY:void 0,angle:0,size:null,sizeGap:0,onStart:null,onComplete:null,onUpdate:null,duration:500,delay:0,repeat:0,yoyo:!1,easing:"Linear.None"},e.prototype.vars=function(){var t;return null==this.h&&(this.h=p),null==this.lastSet&&(this.lastSet={}),this.index=this.o.index||0,null==this.runCount&&(this.runCount=0),this.extendDefaults(),t=this.h.cloneObj(this.o),this.h.extend(t,this.defaults),this.history=[t],this.isForeign=!!this.o.ctx,this.isForeignBit=!!this.o.bit,this.timelines=[]},e.prototype.render=function(){return this.isRendered||(this.isForeign||this.isForeignBit?(this.ctx=this.o.ctx,this.createBit(),this.calcSize()):(this.ctx=document.createElementNS(this.ns,"svg"),this.ctx.style.position="absolute",this.ctx.style.width="100%",this.ctx.style.height="100%",this.createBit(),this.calcSize(),this.el=document.createElement("div"),this.el.appendChild(this.ctx),(this.o.parent||document.body).appendChild(this.el)),this.isRendered=!0),this.setElStyles(),this.setProgress(0,!0),this.createTween(),this},e.prototype.setElStyles=function(){var t,e,r;return this.isForeign||(r=this.props.size+"px",t=-this.props.size/2+"px",this.el.style.position="absolute",this.el.style.top=this.props.y,this.el.style.left=this.props.x,this.el.style.width=r,this.el.style.height=r,this.el.style["margin-left"]=t,this.el.style["margin-top"]=t,this.el.style.marginLeft=t,this.el.style.marginTop=t),null!=(e=this.el)&&(e.style.opacity=this.props.opacity),this.o.isShowInit?this.show():this.hide()},e.prototype.show=function(){return this.isShown||null==this.el?void 0:(this.el.style.display="block",this.isShown=!0)},e.prototype.hide=function(){return this.isShown!==!1&&null!=this.el?(this.el.style.display="none",this.isShown=!1):void 0},e.prototype.draw=function(){return this.bit.setProp({x:this.origin.x,y:this.origin.y,stroke:this.props.stroke,"stroke-width":this.props.strokeWidth,"stroke-opacity":this.props.strokeOpacity,"stroke-dasharray":this.props.strokeDasharray,"stroke-dashoffset":this.props.strokeDashoffset,"stroke-linecap":this.props.strokeLinecap,fill:this.props.fill,"fill-opacity":this.props.fillOpacity,radius:this.props.radius,radiusX:this.props.radiusX,radiusY:this.props.radiusY,points:this.props.points,transform:this.calcTransform()}),this.bit.draw(),this.drawEl()},e.prototype.drawEl=function(){return null!=this.el?(this.isPropChanged("opacity")&&(this.el.style.opacity=this.props.opacity),!this.isForeign&&(this.isPropChanged("x")&&(this.el.style.left=this.props.x),this.isPropChanged("y")&&(this.el.style.top=this.props.y),this.isNeedsTransform())?this.h.setPrefixedStyle(this.el,"transform",this.fillTransform()):void 0):void 0},e.prototype.fillTransform=function(){return"translate("+this.props.shiftX+", "+this.props.shiftY+")"},e.prototype.isNeedsTransform=function(){var t,e;return t=this.isPropChanged("shiftX"),e=this.isPropChanged("shiftY"),t||e},e.prototype.isPropChanged=function(t){var e;return null==(e=this.lastSet)[t]&&(e[t]={}),this.lastSet[t].value!==this.props[t]?(this.lastSet[t].value=this.props[t],!0):!1},e.prototype.calcTransform=function(){return this.props.transform="rotate("+this.props.angle+","+this.origin.x+","+this.origin.y+")"},e.prototype.calcSize=function(){var t,e,r,s;if(!this.o.size){switch(r=this.calcMaxRadius(),e=this.deltas.strokeWidth,s=null!=e?Math.max(Math.abs(e.start),Math.abs(e.end)):this.props.strokeWidth,this.props.size=2*r+2*s,"function"==typeof(t=this.props.easing).toLowerCase?t.toLowerCase():void 0){case"elastic.out":case"elastic.inout":this.props.size*=1.25;break;case"back.out":case"back.inout":this.props.size*=1.1}return this.props.size*=this.bit.ratio,this.props.size+=2*this.props.sizeGap,this.props.center=this.props.size/2}},e.prototype.calcMaxRadius=function(){var t,e,r;return t=this.getRadiusSize({key:"radius"}),e=this.getRadiusSize({key:"radiusX",fallback:t}),r=this.getRadiusSize({key:"radiusY",fallback:t}),Math.max(e,r)},e.prototype.getRadiusSize=function(t){return null!=this.deltas[t.key]?Math.max(Math.abs(this.deltas[t.key].end),Math.abs(this.deltas[t.key].start)):null!=this.props[t.key]?parseFloat(this.props[t.key]):t.fallback||0},e.prototype.createBit=function(){var t;return t=o.getBit(this.o.type||this.type),this.bit=new t({ctx:this.ctx,el:this.o.bit,isDrawLess:!0}),this.isForeign||this.isForeignBit?this.el=this.bit.el:void 0},e.prototype.setProgress=function(t,e){return e||(this.show(),"function"==typeof this.onUpdate&&this.onUpdate(t)),this.progress=0>t||!t?0:t>1?1:t,this.calcCurrentProps(t),this.calcOrigin(),this.draw(t),this},e.prototype.calcCurrentProps=function(t){var e,r,s,i,n,o,p,a,h,u,l,c,d,f;for(a=Object.keys(this.deltas),h=a.length,l=[];h--;)p=a[h],f=this.deltas[p],l.push(this.props[p]=function(){var p,a,h;switch(f.type){case"array":for(c=[],h=f.delta,n=p=0,a=h.length;a>p;n=++p)o=h[n],s=f.start[n].value+o.value*this.progress,c.push({value:s,unit:o.unit});return c;case"number":return f.start+f.delta*t;case"unit":return d=f.end.unit,""+(f.start.value+f.delta*t)+d;case"color":return u=parseInt(f.start.r+f.delta.r*t,10),i=parseInt(f.start.g+f.delta.g*t,10),r=parseInt(f.start.b+f.delta.b*t,10),e=parseInt(f.start.a+f.delta.a*t,10),"rgba("+u+","+i+","+r+","+e+")"}}.call(this));return l},e.prototype.calcOrigin=function(){return this.origin=this.o.ctx?{x:parseFloat(this.props.x),y:parseFloat(this.props.y)}:{x:this.props.center,y:this.props.center}},e.prototype.extendDefaults=function(t){var e,r,s,i,n,o,p,a,h,u,l,c,d,f;for(null==this.props&&(this.props={}),s=t||this.defaults,null==t&&(this.deltas={}),p=Object.keys(s),a=p.length;a--;)if(o=p[a],r=s[o],null!=(c=this.skipProps)?!c[o]:!0)if(t?(this.o[o]=r,u=r,delete this.deltas[o]):u=null!=this.o[o]?this.o[o]:r,this.isDelta(u))this.isSkipDelta||this.getDelta(o,u);else if("string"==typeof u&&u.match(/stagger/)&&(u=this.h.parseStagger(u,this.index)),"string"==typeof u&&u.match(/rand/)&&(u=this.h.parseRand(u)),this.props[o]=u,"radius"===o&&(null==this.o.radiusX&&(this.props.radiusX=u),null==this.o.radiusY&&(this.props.radiusY=u)),this.h.posPropsMap[o]&&(this.props[o]=this.h.parseUnit(this.props[o]).string),this.h.strokeDashPropsMap[o]){switch(l=this.props[o],f=[],typeof l){case"number":f.push(this.h.parseUnit(l));break;case"string":for(e=this.props[o].split(" "),i=n=0,h=e.length;h>n;i=++n)d=e[i],f.push(this.h.parseUnit(d))}this.props[o]=f}return this.onUpdate=this.props.onUpdate},e.prototype.isDelta=function(t){var e;return e=null!=t&&"object"==typeof t,e=e&&!t.unit,!(!e||this.h.isArray(t)||p.isDOM(t))},e.prototype.getDelta=function(t,e){var r,s;return"x"!==t&&"y"!==t||this.o.ctx||this.h.warn("Consider to animate shiftX/shiftY properties instead of x/y, as it would be much more performant",e),(null!=(s=this.skipPropsDelta)?s[t]:0)?void 0:(r=this.h.parseDelta(t,e,this.defaults[t]),null!=r.type&&(this.deltas[t]=r),this.props[t]=r.start)},e.prototype.mergeThenOptions=function(t,e){var r,s,i,n,o,p,a,h,u;p={};for(n in t)u=t[n],p[n]=!this.h.tweenOptionMap[n]&&!this.h.callbacksMap[n]||"duration"===n?u:"easing"===n?"":void 0;for(o=Object.keys(e),s=o.length;s--;)n=o[s],r=e[n],i="function"==typeof r,this.h.tweenOptionMap[n]||"object"==typeof r||i?p[n]=null!=r?r:t[n]:(a=t[n],null==a&&(a=this.defaults[n]),"radiusX"!==n&&"radiusY"!==n||null!=a||(a=t.radius),"object"==typeof a&&null!=a&&(h=Object.keys(a),a=a[h[0]]),null!=r&&(p[n]={},p[n][a]=r));return p},e.prototype.then=function(t){var e,r,i,n,o,p;if(null!=t&&Object.keys(t)){for(o=this.mergeThenOptions(this.history[this.history.length-1],t),this.history.push(o),i=Object.keys(this.h.tweenOptionMap),e=i.length,p={};e--;)p[i[e]]=o[i[e]];return r=this,n=r.history.length,function(e){return function(i){return p.onUpdate=function(t){return e.setProgress(t)},p.onStart=function(){var t;return null!=(t=e.props.onStart)?t.apply(e):void 0},p.onComplete=function(){var t;return null!=(t=e.props.onComplete)?t.apply(e):void 0},p.onFirstUpdate=function(){return r.tuneOptions(r.history[this.index])},p.isChained=!t.delay,e.tween.append(new s(p))}}(this)(n),this}},e.prototype.tuneOptions=function(t){return this.extendDefaults(t),this.calcSize(),this.setElStyles()},e.prototype.createTween=function(){var t;return t=this,this.createTimeline(),this.tween=new n({onComplete:function(t){return function(){var e;return!t.o.isShowEnd&&t.hide(),null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this)}),this.tween.add(this.timeline),!this.o.isRunLess&&this.startTween()},e.prototype.createTimeline=function(){return this.timeline=new s({duration:this.props.duration,delay:this.props.delay,repeat:this.props.repeat,yoyo:this.props.yoyo,easing:this.props.easing,onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onStart:function(t){return function(){var e;return t.show(),null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onFirstUpdateBackward:function(t){return function(){return t.history.length>1&&t.tuneOptions(t.history[0])}}(this),onReverseComplete:function(t){return function(){var e;return!t.o.isShowInit&&t.hide(),null!=(e=t.props.onReverseComplete)?e.apply(t):void 0}}(this)})},e.prototype.run=function(t){var e,r,s;if(this.runCount++,t&&Object.keys(t).length){if(this.history.length>1)for(r=Object.keys(t),s=r.length;s--;)e=r[s],(p.callbacksMap[e]||p.tweenOptionMap[e])&&(p.warn('the property "'+e+'" property can not be overridden on run with "then" chain yet'),delete t[e]);this.transformHistory(t),this.tuneNewOption(t),t=this.h.cloneObj(this.o),this.h.extend(t,this.defaults),this.history[0]=t,!this.o.isDrawLess&&this.setProgress(0,!0)}else this.tuneNewOption(this.history[0]);return this.startTween()},e.prototype.transformHistory=function(t){var e,r,s,i,n,o,p,a,h,u,l,c;for(n=Object.keys(t),r=-1,o=n.length,e=this.history.length,a=[];++r<o;)i=n[r],s=0,a.push(function(){var r;for(r=[];++s<e;){if(p=this.history[s][i],"object"==typeof p){l=Object.keys(p),h=p[l[0]],delete this.history[s][i][l[0]],"object"==typeof t[i]?(c=Object.keys(t[i]),u=t[i][c[0]],this.history[s][i][u]=h):this.history[s][i][t[i]]=h;break}r.push(this.history[s][i]=t[i])}return r}.call(this));return a},e.prototype.tuneNewOption=function(t,e){return null!=t&&null!=t.type&&t.type!==(this.o.type||this.type)&&(this.h.warn("Sorry, type can not be changed on run"),delete t.type),null!=t&&Object.keys(t).length?(this.extendDefaults(t),this.resetTimeline(),!e&&this.tween.recalcDuration(),this.calcSize(),!e&&this.setElStyles()):void 0},e.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.tween)?e.start():void 0}}(this),1)},e.prototype.resetTimeline=function(){var t,e,r,s,i,n;for(n={},i=Object.keys(this.h.tweenOptionMap),t=e=0,s=i.length;s>e;t=++e)r=i[t],n[r]=this.props[r];return n.onStart=this.props.onStart,n.onComplete=this.props.onComplete,this.timeline.setProp(n)},e.prototype.getBitLength=function(){return this.props.bitLength=this.bit.getLength(),this.props.bitLength},e}(o.map.bit),e.exports=i},{"./h":4,"./shapes/bitsMap":11,"./tween/timeline":23,"./tween/tween":24}],23:[function(t,e,r){var s,i,n;i=t("../easing"),n=t("../h"),s=function(){function t(t){this.o=null!=t?t:{},this.extendDefaults(),this.vars()}return t.prototype.defaults={duration:600,delay:0,repeat:0,yoyo:!1,easing:"Linear.None",durationElapsed:0,delayElapsed:0,onStart:null,onComplete:null,isChained:!1},t.prototype.vars=function(){return this.h=n,this.props={},this.progress=0,this.prevTime=0,this.props.easing=this.parseEasing(this.o.easing),this.calcDimentions()},t.prototype.calcDimentions=function(){return this.props.totalTime=(this.o.repeat+1)*(this.o.duration+this.o.delay),this.props.totalDuration=this.props.totalTime-this.o.delay},t.prototype.extendDefaults=function(){return n.extend(this.o,this.defaults),this.onUpdate=this.o.onUpdate},t.prototype.start=function(t){return this.isCompleted=!1,this.isStarted=!1,this.props.startTime=(t||performance.now())+this.o.delay,this.props.endTime=this.props.startTime+this.props.totalDuration,this},t.prototype.update=function(t){var e,r,s,i,n,o,p,a,h,u;if(t>=this.props.startTime&&t<this.props.endTime){if(this.isOnReverseComplete=!1,this.isCompleted=!1,this.isFirstUpdate||(null!=(i=this.o.onFirstUpdate)&&i.apply(this),this.isFirstUpdate=!0),this.isStarted||(null!=(n=this.o.onStart)&&n.apply(this),this.isStarted=!0),r=t-this.props.startTime,r<=this.o.duration)this.setProc(r/this.o.duration);else{for(u=this.props.startTime,s=!1,e=0;t>=u;)s=!s,u+=s?(e++,this.o.duration):this.o.delay;s?(u-=this.o.duration,r=t-u,this.setProc(r/this.o.duration),this.o.yoyo&&this.o.repeat&&this.setProc(e%2===1?this.progress:1-(0===this.progress?1:this.progress))):this.setProc(0);

	}t<this.prevTime&&!this.isFirstUpdateBackward&&(null!=(o=this.o.onFirstUpdateBackward)&&o.apply(this),this.isFirstUpdateBackward=!0),"function"==typeof this.onUpdate&&this.onUpdate(this.easedProgress)}else t>=this.props.endTime&&!this.isCompleted&&(this.setProc(1),"function"==typeof this.onUpdate&&this.onUpdate(this.easedProgress),null!=(p=this.o.onComplete)&&p.apply(this),this.isCompleted=!0,this.isOnReverseComplete=!1),(t>this.props.endTime||t<this.props.startTime)&&(this.isFirstUpdate=!1),t>this.props.endTime&&(this.isFirstUpdateBackward=!1);return t<this.prevTime&&t<=this.props.startTime&&(this.isFirstUpdateBackward||(null!=(a=this.o.onFirstUpdateBackward)&&a.apply(this),this.isFirstUpdateBackward=!0),this.isOnReverseComplete||(this.isOnReverseComplete=!0,this.setProc(0),!this.o.isChained&&("function"==typeof this.onUpdate?this.onUpdate(this.easedProgress):void 0),null!=(h=this.o.onReverseComplete)&&h.apply(this))),this.prevTime=t},t.prototype.setProc=function(t){return this.progress=t,this.easedProgress=this.props.easing(this.progress)},t.prototype.setProp=function(t,e){var r,s;if("object"==typeof t)for(r in t)s=t[r],this.o[r]=s;else"string"==typeof t&&(this.o[t]=e);return this.calcDimentions()},t.prototype.parseEasing=function(t){var e;return e=typeof t,"string"===e?"m"===t.charAt(0).toLowerCase()?i.path(t):(t=this.splitEasing(t),i[t[0]][t[1]]):n.isArray(t)?i.bezier.apply(i,t):t},t.prototype.splitEasing=function(t){var e,r,s;return"function"==typeof t?t:"string"==typeof t&&t.length?(s=t.split("."),e=s[0].toLowerCase()||"linear",r=s[1].toLowerCase()||"none",[e,r]):["linear","none"]},t}(),e.exports=s},{"../easing":3,"../h":4}],24:[function(t,e,r){var s,i,n;i=t("../h"),n=t("./tweener"),s=function(){function t(t){this.o=null!=t?t:{},this.vars()}return t.prototype.state="stop",t.prototype.vars=function(){return this.timelines=[],this.props={totalTime:0},this.loop=i.bind(this.loop,this),this.onUpdate=this.o.onUpdate},t.prototype.add=function(){var t;return t=Array.prototype.slice.apply(arguments),this.pushTimelineArray(t)},t.prototype.pushTimelineArray=function(t){var e,r,s,n,o;for(n=[],e=r=0,s=t.length;s>r;e=++r)o=t[e],n.push(i.isArray(o)?this.pushTimelineArray(o):this.pushTimeline(o));return n},t.prototype.pushTimeline=function(t){return this.timelines.push(t),this.props.totalTime=Math.max(t.props.totalTime,this.props.totalTime)},t.prototype.remove=function(t){var e;return e=this.timelines.indexOf(t),-1!==e?this.timelines.splice(e,1):void 0},t.prototype.append=function(t){var e;if(i.isArray(t)){for(e=t.length;e--;)this.appendTimeline(t[e]);return this.recalcDuration()}return t.index=this.timelines.length,this.appendTimeline(t),this.props.totalTime=Math.max(t.props.totalTime,this.props.totalTime)},t.prototype.appendTimeline=function(t){return t.setProp({delay:t.o.delay+this.props.totalTime}),this.timelines.push(t)},t.prototype.recalcDuration=function(){var t,e,r;for(t=this.timelines.length,this.props.totalTime=0,e=[];t--;)r=this.timelines[t],e.push(this.props.totalTime=Math.max(r.props.totalTime,this.props.totalTime));return e},t.prototype.update=function(t){var e,r,s,i;for(t>this.props.endTime&&(t=this.props.endTime),e=-1,r=this.timelines.length-1;e++<r;)this.timelines[e].update(t);return t>=this.props.startTime&&t<this.props.endTime&&"function"==typeof this.onUpdate&&this.onUpdate((t-this.props.startTime)/this.props.totalTime),this.prevTime>t&&t<=this.props.startTime&&null!=(s=this.o.onReverseComplete)&&s.apply(this),this.prevTime=t,t===this.props.endTime?("function"==typeof this.onUpdate&&this.onUpdate(1),null!=(i=this.o.onComplete)&&i.apply(this),!0):void 0},t.prototype.prepareStart=function(){var t;return this.getDimentions(),null!=(t=this.o.onStart)?t.apply(this):void 0},t.prototype.startTimelines=function(t){var e,r;for(e=this.timelines.length,r=[];e--;)r.push(this.timelines[e].start(t||this.props.startTime));return r},t.prototype.start=function(t){return this.setStartTime(t),!t&&n.add(this),this.state="play",this},t.prototype.pause=function(){return this.removeFromTweener(),this.state="pause",this},t.prototype.stop=function(){return this.removeFromTweener(),this.setProgress(0),this.state="stop",this},t.prototype.restart=function(){return this.stop(),this.start()},t.prototype.removeFromTweener=function(){return n.remove(this),this},t.prototype.getDimentions=function(){return this.props.startTime=performance.now(),this.props.endTime=this.props.startTime+this.props.totalTime},t.prototype.setStartTime=function(t){return this.prepareStart(),this.startTimelines(t)},t.prototype.setProgress=function(t){return null==this.props.startTime&&this.setStartTime(),t=Math.max(t,0),t=Math.min(t,1),this.update(this.props.startTime+t*this.props.totalTime)},t}(),e.exports=s},{"../h":4,"./tweener":25}],25:[function(t,e,r){var s,i,n,o;t("../polyfills/raf"),t("../polyfills/performance"),i=t("../h"),n=0,s=function(){function t(){this.vars()}return t.prototype.vars=function(){return this.tweens=[],this.loop=i.bind(this.loop,this)},t.prototype.loop=function(){var t;return this.isRunning?(t=performance.now(),this.update(t),this.tweens.length?(requestAnimationFrame(this.loop),this):this.isRunning=!1):!1},t.prototype.startLoop=function(){return this.isRunning?void 0:(this.isRunning=!0,requestAnimationFrame(this.loop))},t.prototype.stopLoop=function(){return this.isRunning=!1},t.prototype.update=function(t){var e;for(n=this.tweens.length,e=[];n--;)e.push(this.tweens[n].update(t)===!0?this.remove(n):void 0);return e},t.prototype.add=function(t){return this.tweens.push(t),this.startLoop()},t.prototype.removeAll=function(){return this.tweens.length=0},t.prototype.remove=function(t){var e;return e="number"==typeof t?t:this.tweens.indexOf(t),-1!==e?this.tweens.splice(e,1):void 0},t}(),o=new s,e.exports=o},{"../h":4,"../polyfills/performance":8,"../polyfills/raf":9}],26:[function(e,r,s){!function(){var e;return e=function(){function t(t){this.o=null!=t?t:{},window.isAnyResizeEventInited||(this.vars(),this.redefineProto())}return t.prototype.vars=function(){return window.isAnyResizeEventInited=!0,this.allowedProtos=[HTMLDivElement,HTMLFormElement,HTMLLinkElement,HTMLBodyElement,HTMLParagraphElement,HTMLFieldSetElement,HTMLLegendElement,HTMLLabelElement,HTMLButtonElement,HTMLUListElement,HTMLOListElement,HTMLLIElement,HTMLHeadingElement,HTMLQuoteElement,HTMLPreElement,HTMLBRElement,HTMLFontElement,HTMLHRElement,HTMLModElement,HTMLParamElement,HTMLMapElement,HTMLTableElement,HTMLTableCaptionElement,HTMLImageElement,HTMLTableCellElement,HTMLSelectElement,HTMLInputElement,HTMLTextAreaElement,HTMLAnchorElement,HTMLObjectElement,HTMLTableColElement,HTMLTableSectionElement,HTMLTableRowElement],this.timerElements={img:1,textarea:1,input:1,embed:1,object:1,svg:1,canvas:1,tr:1,tbody:1,thead:1,tfoot:1,a:1,select:1,option:1,optgroup:1,dl:1,dt:1,br:1,basefont:1,font:1,col:1,iframe:1}},t.prototype.redefineProto=function(){var t,e,r,s;return e=this,s=function(){var s,i,n,o;for(n=this.allowedProtos,o=[],t=s=0,i=n.length;i>s;t=++s)r=n[t],null!=r.prototype&&o.push(function(t){var r,s;return r=t.prototype.addEventListener||t.prototype.attachEvent,function(r){var s;return s=function(){var t;return(this!==window||this!==document)&&(t="onresize"===arguments[0]&&!this.isAnyResizeEventInited,t&&e.handleResize({args:arguments,that:this})),r.apply(this,arguments)},t.prototype.addEventListener?t.prototype.addEventListener=s:t.prototype.attachEvent?t.prototype.attachEvent=s:void 0}(r),s=t.prototype.removeEventListener||t.prototype.detachEvent,function(e){var r;return r=function(){return this.isAnyResizeEventInited=!1,this.iframe&&this.removeChild(this.iframe),e.apply(this,arguments)},t.prototype.removeEventListener?t.prototype.removeEventListener=r:t.prototype.detachEvent?t.prototype.detachEvent=wrappedListener:void 0}(s)}(r));return o}.call(this)},t.prototype.handleResize=function(t){var e,r,s,i,n,o,p;return r=t.that,this.timerElements[r.tagName.toLowerCase()]?this.initTimer(r):(s=document.createElement("iframe"),r.appendChild(s),s.style.width="100%",s.style.height="100%",s.style.position="absolute",s.style.zIndex=-999,s.style.opacity=0,s.style.top=0,s.style.left=0,e=window.getComputedStyle?getComputedStyle(r):r.currentStyle,n=""===r.style.position,o="static"===e.position&&n,i=""===e.position&&""===r.style.position,(o||i)&&(r.style.position="relative"),null!=(p=s.contentWindow)&&(p.onresize=function(t){return function(e){return t.dispatchEvent(r)}}(this)),r.iframe=s),r.isAnyResizeEventInited=!0},t.prototype.initTimer=function(t){var e,r;return r=0,e=0,this.interval=setInterval(function(s){return function(){var i,n;return n=t.offsetWidth,i=t.offsetHeight,n!==r||i!==e?(s.dispatchEvent(t),r=n,e=i):void 0}}(this),this.o.interval||62.5)},t.prototype.dispatchEvent=function(t){var e;return document.createEvent?(e=document.createEvent("HTMLEvents"),e.initEvent("onresize",!1,!1),t.dispatchEvent(e)):document.createEventObject?(e=document.createEventObject(),t.fireEvent("onresize",e)):!1},t.prototype.destroy=function(){var t,e,r,s,i,n,o;for(clearInterval(this.interval),this.interval=null,window.isAnyResizeEventInited=!1,e=this,n=this.allowedProtos,o=[],t=r=0,s=n.length;s>r;t=++r)i=n[t],null!=i.prototype&&o.push(function(t){var e;return e=t.prototype.addEventListener||t.prototype.attachEvent,t.prototype.addEventListener?t.prototype.addEventListener=Element.prototype.addEventListener:t.prototype.attachEvent&&(t.prototype.attachEvent=Element.prototype.attachEvent),t.prototype.removeEventListener?t.prototype.removeEventListener=Element.prototype.removeEventListener:t.prototype.detachEvent?t.prototype.detachEvent=Element.prototype.detachEvent:void 0}(i));return o},t}(),"function"==typeof t&&t.amd?t("any-resize-event",[],function(){return new e}):"object"==typeof r&&"object"==typeof r.exports?r.exports=new e:("undefined"!=typeof window&&null!==window&&(window.AnyResizeEvent=e),"undefined"!=typeof window&&null!==window?window.anyResizeEvent=new e:void 0)}()},{}]},{},[5])(5)});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 *  howler.js v1.1.26
	 *  howlerjs.com
	 *
	 *  (c) 2013-2015, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */

	(function() {
	  // setup
	  var cache = {};

	  // setup the audio context
	  var ctx = null,
	    usingWebAudio = true,
	    noAudio = false;
	  try {
	    if (typeof AudioContext !== 'undefined') {
	      ctx = new AudioContext();
	    } else if (typeof webkitAudioContext !== 'undefined') {
	      ctx = new webkitAudioContext();
	    } else {
	      usingWebAudio = false;
	    }
	  } catch(e) {
	    usingWebAudio = false;
	  }

	  if (!usingWebAudio) {
	    if (typeof Audio !== 'undefined') {
	      try {
	        new Audio();
	      } catch(e) {
	        noAudio = true;
	      }
	    } else {
	      noAudio = true;
	    }
	  }

	  // create a master gain node
	  if (usingWebAudio) {
	    var masterGain = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
	    masterGain.gain.value = 1;
	    masterGain.connect(ctx.destination);
	  }

	  // create global controller
	  var HowlerGlobal = function(codecs) {
	    this._volume = 1;
	    this._muted = false;
	    this.usingWebAudio = usingWebAudio;
	    this.ctx = ctx;
	    this.noAudio = noAudio;
	    this._howls = [];
	    this._codecs = codecs;
	    this.iOSAutoEnable = true;
	  };
	  HowlerGlobal.prototype = {
	    /**
	     * Get/set the global volume for all sounds.
	     * @param  {Float} vol Volume from 0.0 to 1.0.
	     * @return {Howler/Float}     Returns self or current volume.
	     */
	    volume: function(vol) {
	      var self = this;

	      // make sure volume is a number
	      vol = parseFloat(vol);

	      if (vol >= 0 && vol <= 1) {
	        self._volume = vol;

	        if (usingWebAudio) {
	          masterGain.gain.value = vol;
	        }

	        // loop through cache and change volume of all nodes that are using HTML5 Audio
	        for (var key in self._howls) {
	          if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
	            // loop through the audio nodes
	            for (var i=0; i<self._howls[key]._audioNode.length; i++) {
	              self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
	            }
	          }
	        }

	        return self;
	      }

	      // return the current global volume
	      return (usingWebAudio) ? masterGain.gain.value : self._volume;
	    },

	    /**
	     * Mute all sounds.
	     * @return {Howler}
	     */
	    mute: function() {
	      this._setMuted(true);

	      return this;
	    },

	    /**
	     * Unmute all sounds.
	     * @return {Howler}
	     */
	    unmute: function() {
	      this._setMuted(false);

	      return this;
	    },

	    /**
	     * Handle muting and unmuting globally.
	     * @param  {Boolean} muted Is muted or not.
	     */
	    _setMuted: function(muted) {
	      var self = this;

	      self._muted = muted;

	      if (usingWebAudio) {
	        masterGain.gain.value = muted ? 0 : self._volume;
	      }

	      for (var key in self._howls) {
	        if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
	          // loop through the audio nodes
	          for (var i=0; i<self._howls[key]._audioNode.length; i++) {
	            self._howls[key]._audioNode[i].muted = muted;
	          }
	        }
	      }
	    },

	    /**
	     * Check for codec support.
	     * @param  {String} ext Audio file extention.
	     * @return {Boolean}
	     */
	    codecs: function(ext) {
	      return this._codecs[ext];
	    },

	    /**
	     * iOS will only allow audio to be played after a user interaction.
	     * Attempt to automatically unlock audio on the first user interaction.
	     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
	     * @return {Howler}
	     */
	    _enableiOSAudio: function() {
	      var self = this;

	      // only run this on iOS if audio isn't already eanbled
	      if (ctx && (self._iOSEnabled || !/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
	        return;
	      }

	      self._iOSEnabled = false;

	      // call this method on touch start to create and play a buffer,
	      // then check if the audio actually played to determine if
	      // audio has now been unlocked on iOS
	      var unlock = function() {
	        // create an empty buffer
	        var buffer = ctx.createBuffer(1, 1, 22050);
	        var source = ctx.createBufferSource();
	        source.buffer = buffer;
	        source.connect(ctx.destination);

	        // play the empty buffer
	        if (typeof source.start === 'undefined') {
	          source.noteOn(0);
	        } else {
	          source.start(0);
	        }

	        // setup a timeout to check that we are unlocked on the next event loop
	        setTimeout(function() {
	          if ((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
	            // update the unlocked state and prevent this check from happening again
	            self._iOSEnabled = true;
	            self.iOSAutoEnable = false;

	            // remove the touch start listener
	            window.removeEventListener('touchstart', unlock, false);
	          }
	        }, 0);
	      };

	      // setup a touch start listener to attempt an unlock in
	      window.addEventListener('touchstart', unlock, false);

	      return self;
	    }
	  };

	  // check for browser codec support
	  var audioTest = null;
	  var codecs = {};
	  if (!noAudio) {
	    audioTest = new Audio();
	    codecs = {
	      mp3: !!audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''),
	      opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
	      ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	      wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
	      aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
	      m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	      mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	      weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
	    };
	  }

	  // allow access to the global audio controls
	  var Howler = new HowlerGlobal(codecs);

	  // setup the audio object
	  var Howl = function(o) {
	    var self = this;

	    // setup the defaults
	    self._autoplay = o.autoplay || false;
	    self._buffer = o.buffer || false;
	    self._duration = o.duration || 0;
	    self._format = o.format || null;
	    self._loop = o.loop || false;
	    self._loaded = false;
	    self._sprite = o.sprite || {};
	    self._src = o.src || '';
	    self._pos3d = o.pos3d || [0, 0, -0.5];
	    self._volume = o.volume !== undefined ? o.volume : 1;
	    self._urls = o.urls || [];
	    self._rate = o.rate || 1;

	    // allow forcing of a specific panningModel ('equalpower' or 'HRTF'),
	    // if none is specified, defaults to 'equalpower' and switches to 'HRTF'
	    // if 3d sound is used
	    self._model = o.model || null;

	    // setup event functions
	    self._onload = [o.onload || function() {}];
	    self._onloaderror = [o.onloaderror || function() {}];
	    self._onend = [o.onend || function() {}];
	    self._onpause = [o.onpause || function() {}];
	    self._onplay = [o.onplay || function() {}];

	    self._onendTimer = [];

	    // Web Audio or HTML5 Audio?
	    self._webAudio = usingWebAudio && !self._buffer;

	    // check if we need to fall back to HTML5 Audio
	    self._audioNode = [];
	    if (self._webAudio) {
	      self._setupAudioNode();
	    }

	    // automatically try to enable audio on iOS
	    if (typeof ctx !== 'undefined' && ctx && Howler.iOSAutoEnable) {
	      Howler._enableiOSAudio();
	    }

	    // add this to an array of Howl's to allow global control
	    Howler._howls.push(self);

	    // load the track
	    self.load();
	  };

	  // setup all of the methods
	  Howl.prototype = {
	    /**
	     * Load an audio file.
	     * @return {Howl}
	     */
	    load: function() {
	      var self = this,
	        url = null;

	      // if no audio is available, quit immediately
	      if (noAudio) {
	        self.on('loaderror');
	        return;
	      }

	      // loop through source URLs and pick the first one that is compatible
	      for (var i=0; i<self._urls.length; i++) {
	        var ext, urlItem;

	        if (self._format) {
	          // use specified audio format if available
	          ext = self._format;
	        } else {
	          // figure out the filetype (whether an extension or base64 data)
	          urlItem = self._urls[i];
	          ext = /^data:audio\/([^;,]+);/i.exec(urlItem);
	          if (!ext) {
	            ext = /\.([^.]+)$/.exec(urlItem.split('?', 1)[0]);
	          }

	          if (ext) {
	            ext = ext[1].toLowerCase();
	          } else {
	            self.on('loaderror');
	            return;
	          }
	        }

	        if (codecs[ext]) {
	          url = self._urls[i];
	          break;
	        }
	      }

	      if (!url) {
	        self.on('loaderror');
	        return;
	      }

	      self._src = url;

	      if (self._webAudio) {
	        loadBuffer(self, url);
	      } else {
	        var newNode = new Audio();

	        // listen for errors with HTML5 audio (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror)
	        newNode.addEventListener('error', function () {
	          if (newNode.error && newNode.error.code === 4) {
	            HowlerGlobal.noAudio = true;
	          }

	          self.on('loaderror', {type: newNode.error ? newNode.error.code : 0});
	        }, false);

	        self._audioNode.push(newNode);

	        // setup the new audio node
	        newNode.src = url;
	        newNode._pos = 0;
	        newNode.preload = 'auto';
	        newNode.volume = (Howler._muted) ? 0 : self._volume * Howler.volume();

	        // setup the event listener to start playing the sound
	        // as soon as it has buffered enough
	        var listener = function() {
	          // round up the duration when using HTML5 Audio to account for the lower precision
	          self._duration = Math.ceil(newNode.duration * 10) / 10;

	          // setup a sprite if none is defined
	          if (Object.getOwnPropertyNames(self._sprite).length === 0) {
	            self._sprite = {_default: [0, self._duration * 1000]};
	          }

	          if (!self._loaded) {
	            self._loaded = true;
	            self.on('load');
	          }

	          if (self._autoplay) {
	            self.play();
	          }

	          // clear the event listener
	          newNode.removeEventListener('canplaythrough', listener, false);
	        };
	        newNode.addEventListener('canplaythrough', listener, false);
	        newNode.load();
	      }

	      return self;
	    },

	    /**
	     * Get/set the URLs to be pulled from to play in this source.
	     * @param  {Array} urls  Arry of URLs to load from
	     * @return {Howl}        Returns self or the current URLs
	     */
	    urls: function(urls) {
	      var self = this;

	      if (urls) {
	        self.stop();
	        self._urls = (typeof urls === 'string') ? [urls] : urls;
	        self._loaded = false;
	        self.load();

	        return self;
	      } else {
	        return self._urls;
	      }
	    },

	    /**
	     * Play a sound from the current time (0 by default).
	     * @param  {String}   sprite   (optional) Plays from the specified position in the sound sprite definition.
	     * @param  {Function} callback (optional) Returns the unique playback id for this sound instance.
	     * @return {Howl}
	     */
	    play: function(sprite, callback) {
	      var self = this;

	      // if no sprite was passed but a callback was, update the variables
	      if (typeof sprite === 'function') {
	        callback = sprite;
	      }

	      // use the default sprite if none is passed
	      if (!sprite || typeof sprite === 'function') {
	        sprite = '_default';
	      }

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('load', function() {
	          self.play(sprite, callback);
	        });

	        return self;
	      }

	      // if the sprite doesn't exist, play nothing
	      if (!self._sprite[sprite]) {
	        if (typeof callback === 'function') callback();
	        return self;
	      }

	      // get the node to playback
	      self._inactiveNode(function(node) {
	        // persist the sprite being played
	        node._sprite = sprite;

	        // determine where to start playing from
	        var pos = (node._pos > 0) ? node._pos : self._sprite[sprite][0] / 1000;

	        // determine how long to play for
	        var duration = 0;
	        if (self._webAudio) {
	          duration = self._sprite[sprite][1] / 1000 - node._pos;
	          if (node._pos > 0) {
	            pos = self._sprite[sprite][0] / 1000 + pos;
	          }
	        } else {
	          duration = self._sprite[sprite][1] / 1000 - (pos - self._sprite[sprite][0] / 1000);
	        }

	        // determine if this sound should be looped
	        var loop = !!(self._loop || self._sprite[sprite][2]);

	        // set timer to fire the 'onend' event
	        var soundId = (typeof callback === 'string') ? callback : Math.round(Date.now() * Math.random()) + '',
	          timerId;
	        (function() {
	          var data = {
	            id: soundId,
	            sprite: sprite,
	            loop: loop
	          };
	          timerId = setTimeout(function() {
	            // if looping, restart the track
	            if (!self._webAudio && loop) {
	              self.stop(data.id).play(sprite, data.id);
	            }

	            // set web audio node to paused at end
	            if (self._webAudio && !loop) {
	              self._nodeById(data.id).paused = true;
	              self._nodeById(data.id)._pos = 0;

	              // clear the end timer
	              self._clearEndTimer(data.id);
	            }

	            // end the track if it is HTML audio and a sprite
	            if (!self._webAudio && !loop) {
	              self.stop(data.id);
	            }

	            // fire ended event
	            self.on('end', soundId);
	          }, duration * 1000);

	          // store the reference to the timer
	          self._onendTimer.push({timer: timerId, id: data.id});
	        })();

	        if (self._webAudio) {
	          var loopStart = self._sprite[sprite][0] / 1000,
	            loopEnd = self._sprite[sprite][1] / 1000;

	          // set the play id to this node and load into context
	          node.id = soundId;
	          node.paused = false;
	          refreshBuffer(self, [loop, loopStart, loopEnd], soundId);
	          self._playStart = ctx.currentTime;
	          node.gain.value = self._volume;

	          if (typeof node.bufferSource.start === 'undefined') {
	            loop ? node.bufferSource.noteGrainOn(0, pos, 86400) : node.bufferSource.noteGrainOn(0, pos, duration);
	          } else {
	            loop ? node.bufferSource.start(0, pos, 86400) : node.bufferSource.start(0, pos, duration);
	          }
	        } else {
	          if (node.readyState === 4 || !node.readyState && navigator.isCocoonJS) {
	            node.readyState = 4;
	            node.id = soundId;
	            node.currentTime = pos;
	            node.muted = Howler._muted || node.muted;
	            node.volume = self._volume * Howler.volume();
	            setTimeout(function() { node.play(); }, 0);
	          } else {
	            self._clearEndTimer(soundId);

	            (function(){
	              var sound = self,
	                playSprite = sprite,
	                fn = callback,
	                newNode = node;
	              var listener = function() {
	                sound.play(playSprite, fn);

	                // clear the event listener
	                newNode.removeEventListener('canplaythrough', listener, false);
	              };
	              newNode.addEventListener('canplaythrough', listener, false);
	            })();

	            return self;
	          }
	        }

	        // fire the play event and send the soundId back in the callback
	        self.on('play');
	        if (typeof callback === 'function') callback(soundId);

	        return self;
	      });

	      return self;
	    },

	    /**
	     * Pause playback and save the current position.
	     * @param {String} id (optional) The play instance ID.
	     * @return {Howl}
	     */
	    pause: function(id) {
	      var self = this;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('play', function() {
	          self.pause(id);
	        });

	        return self;
	      }

	      // clear 'onend' timer
	      self._clearEndTimer(id);

	      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	      if (activeNode) {
	        activeNode._pos = self.pos(null, id);

	        if (self._webAudio) {
	          // make sure the sound has been created
	          if (!activeNode.bufferSource || activeNode.paused) {
	            return self;
	          }

	          activeNode.paused = true;
	          if (typeof activeNode.bufferSource.stop === 'undefined') {
	            activeNode.bufferSource.noteOff(0);
	          } else {
	            activeNode.bufferSource.stop(0);
	          }
	        } else {
	          activeNode.pause();
	        }
	      }

	      self.on('pause');

	      return self;
	    },

	    /**
	     * Stop playback and reset to start.
	     * @param  {String} id  (optional) The play instance ID.
	     * @return {Howl}
	     */
	    stop: function(id) {
	      var self = this;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('play', function() {
	          self.stop(id);
	        });

	        return self;
	      }

	      // clear 'onend' timer
	      self._clearEndTimer(id);

	      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	      if (activeNode) {
	        activeNode._pos = 0;

	        if (self._webAudio) {
	          // make sure the sound has been created
	          if (!activeNode.bufferSource || activeNode.paused) {
	            return self;
	          }

	          activeNode.paused = true;

	          if (typeof activeNode.bufferSource.stop === 'undefined') {
	            activeNode.bufferSource.noteOff(0);
	          } else {
	            activeNode.bufferSource.stop(0);
	          }
	        } else if (!isNaN(activeNode.duration)) {
	          activeNode.pause();
	          activeNode.currentTime = 0;
	        }
	      }

	      return self;
	    },

	    /**
	     * Mute this sound.
	     * @param  {String} id (optional) The play instance ID.
	     * @return {Howl}
	     */
	    mute: function(id) {
	      var self = this;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('play', function() {
	          self.mute(id);
	        });

	        return self;
	      }

	      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	      if (activeNode) {
	        if (self._webAudio) {
	          activeNode.gain.value = 0;
	        } else {
	          activeNode.muted = true;
	        }
	      }

	      return self;
	    },

	    /**
	     * Unmute this sound.
	     * @param  {String} id (optional) The play instance ID.
	     * @return {Howl}
	     */
	    unmute: function(id) {
	      var self = this;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('play', function() {
	          self.unmute(id);
	        });

	        return self;
	      }

	      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	      if (activeNode) {
	        if (self._webAudio) {
	          activeNode.gain.value = self._volume;
	        } else {
	          activeNode.muted = false;
	        }
	      }

	      return self;
	    },

	    /**
	     * Get/set volume of this sound.
	     * @param  {Float}  vol Volume from 0.0 to 1.0.
	     * @param  {String} id  (optional) The play instance ID.
	     * @return {Howl/Float}     Returns self or current volume.
	     */
	    volume: function(vol, id) {
	      var self = this;

	      // make sure volume is a number
	      vol = parseFloat(vol);

	      if (vol >= 0 && vol <= 1) {
	        self._volume = vol;

	        // if the sound hasn't been loaded, add it to the event queue
	        if (!self._loaded) {
	          self.on('play', function() {
	            self.volume(vol, id);
	          });

	          return self;
	        }

	        var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	        if (activeNode) {
	          if (self._webAudio) {
	            activeNode.gain.value = vol;
	          } else {
	            activeNode.volume = vol * Howler.volume();
	          }
	        }

	        return self;
	      } else {
	        return self._volume;
	      }
	    },

	    /**
	     * Get/set whether to loop the sound.
	     * @param  {Boolean} loop To loop or not to loop, that is the question.
	     * @return {Howl/Boolean}      Returns self or current looping value.
	     */
	    loop: function(loop) {
	      var self = this;

	      if (typeof loop === 'boolean') {
	        self._loop = loop;

	        return self;
	      } else {
	        return self._loop;
	      }
	    },

	    /**
	     * Get/set sound sprite definition.
	     * @param  {Object} sprite Example: {spriteName: [offset, duration, loop]}
	     *                @param {Integer} offset   Where to begin playback in milliseconds
	     *                @param {Integer} duration How long to play in milliseconds
	     *                @param {Boolean} loop     (optional) Set true to loop this sprite
	     * @return {Howl}        Returns current sprite sheet or self.
	     */
	    sprite: function(sprite) {
	      var self = this;

	      if (typeof sprite === 'object') {
	        self._sprite = sprite;

	        return self;
	      } else {
	        return self._sprite;
	      }
	    },

	    /**
	     * Get/set the position of playback.
	     * @param  {Float}  pos The position to move current playback to.
	     * @param  {String} id  (optional) The play instance ID.
	     * @return {Howl/Float}      Returns self or current playback position.
	     */
	    pos: function(pos, id) {
	      var self = this;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('load', function() {
	          self.pos(pos);
	        });

	        return typeof pos === 'number' ? self : self._pos || 0;
	      }

	      // make sure we are dealing with a number for pos
	      pos = parseFloat(pos);

	      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	      if (activeNode) {
	        if (pos >= 0) {
	          self.pause(id);
	          activeNode._pos = pos;
	          self.play(activeNode._sprite, id);

	          return self;
	        } else {
	          return self._webAudio ? activeNode._pos + (ctx.currentTime - self._playStart) : activeNode.currentTime;
	        }
	      } else if (pos >= 0) {
	        return self;
	      } else {
	        // find the first inactive node to return the pos for
	        for (var i=0; i<self._audioNode.length; i++) {
	          if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
	            return (self._webAudio) ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
	          }
	        }
	      }
	    },

	    /**
	     * Get/set the 3D position of the audio source.
	     * The most common usage is to set the 'x' position
	     * to affect the left/right ear panning. Setting any value higher than
	     * 1.0 will begin to decrease the volume of the sound as it moves further away.
	     * NOTE: This only works with Web Audio API, HTML5 Audio playback
	     * will not be affected.
	     * @param  {Float}  x  The x-position of the playback from -1000.0 to 1000.0
	     * @param  {Float}  y  The y-position of the playback from -1000.0 to 1000.0
	     * @param  {Float}  z  The z-position of the playback from -1000.0 to 1000.0
	     * @param  {String} id (optional) The play instance ID.
	     * @return {Howl/Array}   Returns self or the current 3D position: [x, y, z]
	     */
	    pos3d: function(x, y, z, id) {
	      var self = this;

	      // set a default for the optional 'y' & 'z'
	      y = (typeof y === 'undefined' || !y) ? 0 : y;
	      z = (typeof z === 'undefined' || !z) ? -0.5 : z;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('play', function() {
	          self.pos3d(x, y, z, id);
	        });

	        return self;
	      }

	      if (x >= 0 || x < 0) {
	        if (self._webAudio) {
	          var activeNode = (id) ? self._nodeById(id) : self._activeNode();
	          if (activeNode) {
	            self._pos3d = [x, y, z];
	            activeNode.panner.setPosition(x, y, z);
	            activeNode.panner.panningModel = self._model || 'HRTF';
	          }
	        }
	      } else {
	        return self._pos3d;
	      }

	      return self;
	    },

	    /**
	     * Fade a currently playing sound between two volumes.
	     * @param  {Number}   from     The volume to fade from (0.0 to 1.0).
	     * @param  {Number}   to       The volume to fade to (0.0 to 1.0).
	     * @param  {Number}   len      Time in milliseconds to fade.
	     * @param  {Function} callback (optional) Fired when the fade is complete.
	     * @param  {String}   id       (optional) The play instance ID.
	     * @return {Howl}
	     */
	    fade: function(from, to, len, callback, id) {
	      var self = this,
	        diff = Math.abs(from - to),
	        dir = from > to ? 'down' : 'up',
	        steps = diff / 0.01,
	        stepTime = len / steps;

	      // if the sound hasn't been loaded, add it to the event queue
	      if (!self._loaded) {
	        self.on('load', function() {
	          self.fade(from, to, len, callback, id);
	        });

	        return self;
	      }

	      // set the volume to the start position
	      self.volume(from, id);

	      for (var i=1; i<=steps; i++) {
	        (function() {
	          var change = self._volume + (dir === 'up' ? 0.01 : -0.01) * i,
	            vol = Math.round(1000 * change) / 1000,
	            toVol = to;

	          setTimeout(function() {
	            self.volume(vol, id);

	            if (vol === toVol) {
	              if (callback) callback();
	            }
	          }, stepTime * i);
	        })();
	      }
	    },

	    /**
	     * [DEPRECATED] Fade in the current sound.
	     * @param  {Float}    to      Volume to fade to (0.0 to 1.0).
	     * @param  {Number}   len     Time in milliseconds to fade.
	     * @param  {Function} callback
	     * @return {Howl}
	     */
	    fadeIn: function(to, len, callback) {
	      return this.volume(0).play().fade(0, to, len, callback);
	    },

	    /**
	     * [DEPRECATED] Fade out the current sound and pause when finished.
	     * @param  {Float}    to       Volume to fade to (0.0 to 1.0).
	     * @param  {Number}   len      Time in milliseconds to fade.
	     * @param  {Function} callback
	     * @param  {String}   id       (optional) The play instance ID.
	     * @return {Howl}
	     */
	    fadeOut: function(to, len, callback, id) {
	      var self = this;

	      return self.fade(self._volume, to, len, function() {
	        if (callback) callback();
	        self.pause(id);

	        // fire ended event
	        self.on('end');
	      }, id);
	    },

	    /**
	     * Get an audio node by ID.
	     * @return {Howl} Audio node.
	     */
	    _nodeById: function(id) {
	      var self = this,
	        node = self._audioNode[0];

	      // find the node with this ID
	      for (var i=0; i<self._audioNode.length; i++) {
	        if (self._audioNode[i].id === id) {
	          node = self._audioNode[i];
	          break;
	        }
	      }

	      return node;
	    },

	    /**
	     * Get the first active audio node.
	     * @return {Howl} Audio node.
	     */
	    _activeNode: function() {
	      var self = this,
	        node = null;

	      // find the first playing node
	      for (var i=0; i<self._audioNode.length; i++) {
	        if (!self._audioNode[i].paused) {
	          node = self._audioNode[i];
	          break;
	        }
	      }

	      // remove excess inactive nodes
	      self._drainPool();

	      return node;
	    },

	    /**
	     * Get the first inactive audio node.
	     * If there is none, create a new one and add it to the pool.
	     * @param  {Function} callback Function to call when the audio node is ready.
	     */
	    _inactiveNode: function(callback) {
	      var self = this,
	        node = null;

	      // find first inactive node to recycle
	      for (var i=0; i<self._audioNode.length; i++) {
	        if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
	          // send the node back for use by the new play instance
	          callback(self._audioNode[i]);
	          node = true;
	          break;
	        }
	      }

	      // remove excess inactive nodes
	      self._drainPool();

	      if (node) {
	        return;
	      }

	      // create new node if there are no inactives
	      var newNode;
	      if (self._webAudio) {
	        newNode = self._setupAudioNode();
	        callback(newNode);
	      } else {
	        self.load();
	        newNode = self._audioNode[self._audioNode.length - 1];

	        // listen for the correct load event and fire the callback
	        var listenerEvent = navigator.isCocoonJS ? 'canplaythrough' : 'loadedmetadata';
	        var listener = function() {
	          newNode.removeEventListener(listenerEvent, listener, false);
	          callback(newNode);
	        };
	        newNode.addEventListener(listenerEvent, listener, false);
	      }
	    },

	    /**
	     * If there are more than 5 inactive audio nodes in the pool, clear out the rest.
	     */
	    _drainPool: function() {
	      var self = this,
	        inactive = 0,
	        i;

	      // count the number of inactive nodes
	      for (i=0; i<self._audioNode.length; i++) {
	        if (self._audioNode[i].paused) {
	          inactive++;
	        }
	      }

	      // remove excess inactive nodes
	      for (i=self._audioNode.length-1; i>=0; i--) {
	        if (inactive <= 5) {
	          break;
	        }

	        if (self._audioNode[i].paused) {
	          // disconnect the audio source if using Web Audio
	          if (self._webAudio) {
	            self._audioNode[i].disconnect(0);
	          }

	          inactive--;
	          self._audioNode.splice(i, 1);
	        }
	      }
	    },

	    /**
	     * Clear 'onend' timeout before it ends.
	     * @param  {String} soundId  The play instance ID.
	     */
	    _clearEndTimer: function(soundId) {
	      var self = this,
	        index = 0;

	      // loop through the timers to find the one associated with this sound
	      for (var i=0; i<self._onendTimer.length; i++) {
	        if (self._onendTimer[i].id === soundId) {
	          index = i;
	          break;
	        }
	      }

	      var timer = self._onendTimer[index];
	      if (timer) {
	        clearTimeout(timer.timer);
	        self._onendTimer.splice(index, 1);
	      }
	    },

	    /**
	     * Setup the gain node and panner for a Web Audio instance.
	     * @return {Object} The new audio node.
	     */
	    _setupAudioNode: function() {
	      var self = this,
	        node = self._audioNode,
	        index = self._audioNode.length;

	      // create gain node
	      node[index] = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
	      node[index].gain.value = self._volume;
	      node[index].paused = true;
	      node[index]._pos = 0;
	      node[index].readyState = 4;
	      node[index].connect(masterGain);

	      // create the panner
	      node[index].panner = ctx.createPanner();
	      node[index].panner.panningModel = self._model || 'equalpower';
	      node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]);
	      node[index].panner.connect(node[index]);

	      return node[index];
	    },

	    /**
	     * Call/set custom events.
	     * @param  {String}   event Event type.
	     * @param  {Function} fn    Function to call.
	     * @return {Howl}
	     */
	    on: function(event, fn) {
	      var self = this,
	        events = self['_on' + event];

	      if (typeof fn === 'function') {
	        events.push(fn);
	      } else {
	        for (var i=0; i<events.length; i++) {
	          if (fn) {
	            events[i].call(self, fn);
	          } else {
	            events[i].call(self);
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Remove a custom event.
	     * @param  {String}   event Event type.
	     * @param  {Function} fn    Listener to remove.
	     * @return {Howl}
	     */
	    off: function(event, fn) {
	      var self = this,
	        events = self['_on' + event],
	        fnString = fn ? fn.toString() : null;

	      if (fnString) {
	        // loop through functions in the event for comparison
	        for (var i=0; i<events.length; i++) {
	          if (fnString === events[i].toString()) {
	            events.splice(i, 1);
	            break;
	          }
	        }
	      } else {
	        self['_on' + event] = [];
	      }

	      return self;
	    },

	    /**
	     * Unload and destroy the current Howl object.
	     * This will immediately stop all play instances attached to this sound.
	     */
	    unload: function() {
	      var self = this;

	      // stop playing any active nodes
	      var nodes = self._audioNode;
	      for (var i=0; i<self._audioNode.length; i++) {
	        // stop the sound if it is currently playing
	        if (!nodes[i].paused) {
	          self.stop(nodes[i].id);
	          self.on('end', nodes[i].id);
	        }

	        if (!self._webAudio) {
	          // remove the source if using HTML5 Audio
	          nodes[i].src = '';
	        } else {
	          // disconnect the output from the master gain
	          nodes[i].disconnect(0);
	        }
	      }

	      // make sure all timeouts are cleared
	      for (i=0; i<self._onendTimer.length; i++) {
	        clearTimeout(self._onendTimer[i].timer);
	      }

	      // remove the reference in the global Howler object
	      var index = Howler._howls.indexOf(self);
	      if (index !== null && index >= 0) {
	        Howler._howls.splice(index, 1);
	      }

	      // delete this sound from the cache
	      delete cache[self._src];
	      self = null;
	    }

	  };

	  // only define these functions when using WebAudio
	  if (usingWebAudio) {

	    /**
	     * Buffer a sound from URL (or from cache) and decode to audio source (Web Audio API).
	     * @param  {Object} obj The Howl object for the sound to load.
	     * @param  {String} url The path to the sound file.
	     */
	    var loadBuffer = function(obj, url) {
	      // check if the buffer has already been cached
	      if (url in cache) {
	        // set the duration from the cache
	        obj._duration = cache[url].duration;

	        // load the sound into this object
	        loadSound(obj);
	        return;
	      }
	      
	      if (/^data:[^;]+;base64,/.test(url)) {
	        // Decode base64 data-URIs because some browsers cannot load data-URIs with XMLHttpRequest.
	        var data = atob(url.split(',')[1]);
	        var dataView = new Uint8Array(data.length);
	        for (var i=0; i<data.length; ++i) {
	          dataView[i] = data.charCodeAt(i);
	        }
	        
	        decodeAudioData(dataView.buffer, obj, url);
	      } else {
	        // load the buffer from the URL
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url, true);
	        xhr.responseType = 'arraybuffer';
	        xhr.onload = function() {
	          decodeAudioData(xhr.response, obj, url);
	        };
	        xhr.onerror = function() {
	          // if there is an error, switch the sound to HTML Audio
	          if (obj._webAudio) {
	            obj._buffer = true;
	            obj._webAudio = false;
	            obj._audioNode = [];
	            delete obj._gainNode;
	            delete cache[url];
	            obj.load();
	          }
	        };
	        try {
	          xhr.send();
	        } catch (e) {
	          xhr.onerror();
	        }
	      }
	    };

	    /**
	     * Decode audio data from an array buffer.
	     * @param  {ArrayBuffer} arraybuffer The audio data.
	     * @param  {Object} obj The Howl object for the sound to load.
	     * @param  {String} url The path to the sound file.
	     */
	    var decodeAudioData = function(arraybuffer, obj, url) {
	      // decode the buffer into an audio source
	      ctx.decodeAudioData(
	        arraybuffer,
	        function(buffer) {
	          if (buffer) {
	            cache[url] = buffer;
	            loadSound(obj, buffer);
	          }
	        },
	        function(err) {
	          obj.on('loaderror');
	        }
	      );
	    };

	    /**
	     * Finishes loading the Web Audio API sound and fires the loaded event
	     * @param  {Object}  obj    The Howl object for the sound to load.
	     * @param  {Objecct} buffer The decoded buffer sound source.
	     */
	    var loadSound = function(obj, buffer) {
	      // set the duration
	      obj._duration = (buffer) ? buffer.duration : obj._duration;

	      // setup a sprite if none is defined
	      if (Object.getOwnPropertyNames(obj._sprite).length === 0) {
	        obj._sprite = {_default: [0, obj._duration * 1000]};
	      }

	      // fire the loaded event
	      if (!obj._loaded) {
	        obj._loaded = true;
	        obj.on('load');
	      }

	      if (obj._autoplay) {
	        obj.play();
	      }
	    };

	    /**
	     * Load the sound back into the buffer source.
	     * @param  {Object} obj   The sound to load.
	     * @param  {Array}  loop  Loop boolean, pos, and duration.
	     * @param  {String} id    (optional) The play instance ID.
	     */
	    var refreshBuffer = function(obj, loop, id) {
	      // determine which node to connect to
	      var node = obj._nodeById(id);

	      // setup the buffer source for playback
	      node.bufferSource = ctx.createBufferSource();
	      node.bufferSource.buffer = cache[obj._src];
	      node.bufferSource.connect(node.panner);
	      node.bufferSource.loop = loop[0];
	      if (loop[0]) {
	        node.bufferSource.loopStart = loop[1];
	        node.bufferSource.loopEnd = loop[1] + loop[2];
	      }
	      node.bufferSource.playbackRate.value = obj._rate;
	    };

	  }

	  /**
	   * Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
	   */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return {
	        Howler: Howler,
	        Howl: Howl
	      };
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }

	  /**
	   * Add support for CommonJS libraries such as browserify.
	   */
	  if (true) {
	    exports.Howler = Howler;
	    exports.Howl = Howl;
	  }

	  // define globally in case AMD is not available or available but not used

	  if (typeof window !== 'undefined') {
	    window.Howler = Howler;
	    window.Howl = Howl;
	  }

	})();


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Applications/MAMP/htdocs/property-curves/node_modules/css-loader/index.js!/Applications/MAMP/htdocs/property-curves/node_modules/autoprefixer-loader/index.js?browsers=last 4 version!/Applications/MAMP/htdocs/property-curves/node_modules/stylus-loader/index.js?paths=node_modules/!/Applications/MAMP/htdocs/property-curves/css/styles.styl", function() {
			var newContent = require("!!/Applications/MAMP/htdocs/property-curves/node_modules/css-loader/index.js!/Applications/MAMP/htdocs/property-curves/node_modules/autoprefixer-loader/index.js?browsers=last 4 version!/Applications/MAMP/htdocs/property-curves/node_modules/stylus-loader/index.js?paths=node_modules/!/Applications/MAMP/htdocs/property-curves/css/styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	exports.push([module.id, "body {\n  paddding: 0;\n  margin: 0;\n  background: #50e3c2;\n}\n.square {\n  width: 100px;\n  height: 100px;\n  background: #0ff;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  top: 50px;\n  z-index: 1;\n}\n.shadow-wrapper {\n  -webkit-transform: rotateX(70deg);\n          transform: rotateX(70deg);\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  z-index: 0;\n  top: 600px;\n  left: 50%;\n  margin-left: -50px;\n}\n.shadow {\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.5);\n}\n.cube-wrapper {\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-perspective-origin: 50% 10%;\n          perspective-origin: 50% 10%;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: 50%;\n  margin-left: -50px;\n  top: -150px;\n}\n.cube {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: rotateY(45deg) rotateX(-15deg) rotateZ(-15deg);\n          transform: rotateY(45deg) rotateX(-15deg) rotateZ(-15deg);\n  z-index: 1;\n  font-size: 0;\n}\n.cube__squash {\n  -webkit-transform-origin: center 100px;\n      -ms-transform-origin: center 100px;\n          transform-origin: center 100px;\n}\n.cube__side {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  background: #fff;\n  border-radius: 10px;\n}\n.cube__side:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n}\n.cube__side--back {\n  -webkit-transform: translateZ(-50px) rotateY(180deg);\n          transform: translateZ(-50px) rotateY(180deg);\n}\n.cube__side--right {\n  -webkit-transform: rotateY(-270deg) translateX(50px);\n          transform: rotateY(-270deg) translateX(50px);\n  -webkit-transform-origin: top right;\n      -ms-transform-origin: top right;\n          transform-origin: top right;\n}\n.cube__side--left {\n  -webkit-transform: rotateY(270deg) translateX(-50px);\n          transform: rotateY(270deg) translateX(-50px);\n  -webkit-transform-origin: center left;\n      -ms-transform-origin: center left;\n          transform-origin: center left;\n}\n.cube__side--top {\n  -webkit-transform: rotateX(-90deg) translateY(-50px);\n          transform: rotateX(-90deg) translateY(-50px);\n  -webkit-transform-origin: top center;\n      -ms-transform-origin: top center;\n          transform-origin: top center;\n}\n.cube__side--top:after {\n  background: rgba(0,0,0,0.02);\n}\n.cube__side--bottom {\n  -webkit-transform: rotateX(90deg) translateY(50px);\n          transform: rotateX(90deg) translateY(50px);\n  -webkit-transform-origin: bottom center;\n      -ms-transform-origin: bottom center;\n          transform-origin: bottom center;\n}\n.cube__side--front {\n  -webkit-transform: translateZ(50px);\n          transform: translateZ(50px);\n}\n.cube__side--front:after {\n  background: rgba(0,0,0,0.05);\n}\n.cube-shadow-wrapper {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  width: 107px;\n  height: 107px;\n  position: absolute;\n  left: 50%;\n  margin-left: -53.5px;\n  top: 541.5px;\n  z-index: 0;\n  -webkit-transform: rotateX(127.5deg) rotateZ(46deg);\n          transform: rotateX(127.5deg) rotateZ(46deg);\n}\n.transit {\n  -webkit-transform: rotateX(127.5deg) rotateZ(46deg) !important;\n          transform: rotateX(127.5deg) rotateZ(46deg) !important;\n}\n.cube-shadow {\n  background: rgba(0,0,0,0.25);\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  opacity: 0;\n}\n", ""]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }
/******/ ]);