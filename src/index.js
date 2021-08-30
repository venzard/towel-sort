// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0){
    return [];
  }
  let arr = [];

  for(let i =0; i < matrix.length; i++){
    if ((i +1) % 2 === 0){
      matrix[i] = matrix[i].reverse();
    }
    arr = arr.concat(matrix[i]);
  }
  
  console.log(arr);
  return arr;
}
