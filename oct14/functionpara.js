
function proxy(x, y) {
    y(x)
}

proxy(5, function (x) {
    console.log(x + x)
})


proxy(5, function (x) {
    console.log(x * x)
})

proxy(5, function (x) {
    console.log(x - x)
})

proxy(5, function (x) {
    console.log(x / x)
})

proxy(5, function (x) {
    console.log(x % x)
})