
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0; 
  }
  var min = Infinity;
  for(var i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0; 
  }
  var max = -Infinity;
  for(var i = 0; i < array.length; i ++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0; 
  }
  var avg = 0;
  for (var i = 0; i < array.length; i++) {
    avg = avg + array[i];
  }
  return (avg / array.length);
};
