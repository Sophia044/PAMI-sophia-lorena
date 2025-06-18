function invertArray<T>(array:T[]):T[]{
    return array.reverse();
}
console.log(invertArray([1,2,3]))
console.log(invertArray(["a","b","c"]))