
exports.min = function min (arr) {
  if (typeof arr === 'undefined') return 0;
  if (arr.length === 0) return 0;
  let min = 0;
  for(let i = 0; i<arr.length; i++){
    if(min>arr[i]){
      min = arr[i];
    }else{
      min = min;
    }
  }
  return min;
}

exports.max = function max (arr) {
  if (typeof arr === 'undefined') return 0;
  if (arr.length === 0) return 0;
  let max = 0;
  for(let i = 0; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i];
    }else{
      max = max;
    }
  }
  return max;
}

exports.avg = function avg (arr) {
  if (typeof arr === 'undefined') return 0;
  if (arr.length === 0) return 0;
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    count = count + arr[i];
  }
  let total = count/arr.length;
  return total;
}
