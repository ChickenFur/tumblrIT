jasmine = require ('jasmine-node');
sys = require('sys');

for (var i = 0; i < jasmine.length; i++){
  key = jasmine[i];
  global[key] = jasmine [key];
}

var isVerbose = true;
var showColors = true;

process.argv.forEach(function(arg){
  switch(arg){
    case '--color':
      return showColors = true;
    case '--noColor':
      return showColors = false;
    case '--verbose':
      return isVerbose = true;
  }
});

jasmine.executeSpecsInFolder(__dirname + "/specs", function(runner, log){
  if (runner.results().failedCount === 0) {
    return process.exit(0);
  } else {
    return process.exit(1);
  }
}, isVerbose, showColors);cd 