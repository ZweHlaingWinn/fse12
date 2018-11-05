// function sum(x, y) {
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
//     console.log(arguments[arguments.length -1])
//     console.log(Object.prototype.toString.call(arguments))
// }
// sum(1, 3, 4, 5)

 sum(1, 2, 3, 4)

function sum(x, y) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[arguments.length-1]);
    console.log(Object.prototype.toString.call(arguments));
}
