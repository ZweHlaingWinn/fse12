function calc() {
    let num = 42;
    const say = function () { console.log(num);  }
    num++;
    return say;
}

var sayNumber = calc();
sayNumber();