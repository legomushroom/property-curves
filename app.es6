var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube = require('./scenes/cube/cube')
var mole = require('./scenes/mole/mole')

var main = {
  s: 5 // global time coefficient
}

cube.init(main);
mole.init(main);
