module.exports = function towelSort (matrix) {
    if( arguments.length == 0 || matrix.length == 0) return [];
    let arr = matrix;
    for(let i = 1; i < arr.length; i+=2){
        arr[i] = arr[i].reverse()
    }
    let x = arr.flat(Infinity);
    return x;
}
