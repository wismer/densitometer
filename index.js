// another approach is to use the JS implementation of arduino stuff

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  // do the arduino shit.
});
