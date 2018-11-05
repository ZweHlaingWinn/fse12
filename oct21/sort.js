//sort with number unicode

// let arrary= [1, 2, 3, 4, 5, 12213, 12123]

// let result= arrary.sort(function (x, y) {
//     return y - x
// })//unicode string

// console.log(result);

// sort with string

let arrary = ['Apple', "Banana", "AA", "aBcD", "ZZZW"]

let result = arrary.sort(function (x, y) {
    return x > y
})

console.log(result);