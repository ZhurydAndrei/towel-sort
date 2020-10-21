
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    let matrix = []
    return matrix
  }else{
    for(i = 0; i < matrix.length; i++){
      if(i % 2 !== 0){
        matrix[i].reverse()
      }
    }
  let result = matrix.flat()
  return result
  }
}
