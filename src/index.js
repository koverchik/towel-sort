
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(arguments.length == 0){
  return [];
}else {
    let newArray = [];
      for (let i = 0; i < matrix.length; i++) {
        if(i%2 == 0){
            newArray.push(matrix[i]);
        }else {
            let reverseArray = matrix[i].reverse();
            newArray.push(reverseArray);
        }
      }
     return newArray.flat(Infinity);


}
}
