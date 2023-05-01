function analyzeArray(arr) {
    let result = {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: length(arr),
    }
    return result;
}

function average (arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        count = count + arr[i];
    }
    count = count / arr.length;
    return count;

}

function min (arr) {
    let result = Math.min.apply(Math, arr);
    return result;
}

function max (arr) {
    let result = Math.max.apply(Math, arr);
    return result;
}

function length (arr) {
    let result = arr.length;
    return result;

}


module.exports = analyzeArray;