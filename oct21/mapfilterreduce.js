
let result=["1", "2", "3", "4", "foo", "dog", "122"]
        .map(x => parseInt(x))
        .filter(x => !isNaN(x))
        .reduce((x, y) => x-y)
console.log(result);